import { NextResponse } from 'next/server';
import { ozzmosisConsorcio, ozzmosisAmortizationSAC } from '@/services/ozzmosisMath';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { credit, term, selicRate, ipca, productType } = body;

        // Spread Bancário Assumido
        const bc_spread = 4.0; 
        const financRate = selicRate + bc_spread;
        
        // --- 1. Finance (Traditional SAC) ---
        const financSchedule = ozzmosisAmortizationSAC(credit, financRate, term);
        
        // --- 2. Consorcio (Sovereign Toolbelt) ---
        // Setup the parameters strictly matching Rodobens Wealth configurations
        let taxaAdminTotalNum = 0.15; // default 15% auto
        if (productType === 'imovel') {
            taxaAdminTotalNum = 0.18; // 18% imovel
        }

        const consorcioStandard = ozzmosisConsorcio({
            credit_value: credit,
            term_months: term,
            admin_fee_total_rate: taxaAdminTotalNum,
        });

        // The time series generator
        const timeSeries = [];
        let cumCustoFinanc = 0;
        let cumCustoCons = 0;
        
        // Lance is 20% average just to simulate dilution at month 6
        const lanceValue = credit * 0.20; 
        const monthForLance = 6;
        let consorcioRemainingBalance = (consorcioStandard.monthly_installment * term) - (consorcioStandard.monthly_installment * monthForLance) - lanceValue;
        let consorcioDilutedPmt = consorcioRemainingBalance / (term - monthForLance);

        for (let i = 1; i <= term; i++) {
            const fPmt = financSchedule[i-1].payment;
            cumCustoFinanc += fPmt;

            let cPmt = consorcioStandard.monthly_installment;
            if (i > monthForLance) {
                cPmt = consorcioDilutedPmt;
            } else if (i === monthForLance) {
                cPmt = consorcioStandard.monthly_installment + lanceValue;
            }
            cumCustoCons += cPmt;

            // Wealth Evolution Model
            // Financing: Asset depreciates relative to the interest you pay
            const realAssetValueFinanc = credit - (cumCustoFinanc - credit); 

            // Consortium: Asset is fixed but has INCC/IPCA correction. 
            // Simplifying assumption: IPCA corrects the letter value 1:1.
            const realAssetValueCons = credit * Math.pow(1 + (ipca/100)/12, i);

            // Installment difference
            const deltaCaixa = fPmt - cPmt;

            timeSeries.push({
                month: i,
                // Balances and Payments
                saldoFinanc: financSchedule[i-1].balance,
                pmtFinanc: fPmt,
                pmtCons: cPmt,
                // Operational Cost Growth
                custoProgFinanc: cumCustoFinanc,
                custoProgCons: cumCustoCons,
                // Wealth Model
                equityFinanc: Math.max(realAssetValueFinanc, 0),
                equityCons: realAssetValueCons,
                // Opportunity Model
                deltaLivre: deltaCaixa
            });
        }

        return NextResponse.json({
            ok: true,
            series: timeSeries,
            summary: {
                totalFinanc: cumCustoFinanc,
                totalCons: cumCustoCons,
                metaSelicAplicada: financRate
            }
        });

    } catch (error) {
        console.error("Analytics Error:", error);
        return NextResponse.json({ ok: false, error: "Internal Analytics Engine Error" }, { status: 500 });
    }
}

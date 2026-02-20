import { NextResponse } from 'next/server';

interface HGBrasilResponse {
    results: {
        currencies: {
            source: string;
            USD: { buy: number; variation: number };
            EUR: { buy: number; variation: number };
            BTC: { buy: number; variation: number };
        };
        stocks: {
            IBOVESPA: { points: number; variation: number };
        };
    };
    execution_time: number;
    from_cache: boolean;
}

export async function GET() {
    try {
        // HG Brasil API Key provided by user
        const API_KEY = process.env.HG_BRASIL_API_KEY || 'd20437dd';
        
        // Fetch HG Brasil Data (Currencies and Stocks)
        // Using Next.js fetch with next: { revalidate: 3600 } to cache for 1 hour (save API quota)
        const hgResponse = await fetch(`https://api.hgbrasil.com/finance?key=${API_KEY}`, {
            next: { revalidate: 3600 } // 1 hour cache
        });
        
        if (!hgResponse.ok) {
            throw new Error(`HG Brasil API Error: ${hgResponse.status}`);
        }
        
        const hgData: HGBrasilResponse = await hgResponse.json();

        // Fetch Banco Central do Brasil (BCB) Data via Olinda API
        // SELIC Meta Anual (Código 432) - Last 1 day
        const selicResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json', {
            next: { revalidate: 86400 } // 24 hours cache for Selic
        });
        const selicData = await selicResponse.json();
        
        // IPCA (Código 433) - Last 1 month (12 months accumulated)
        // Puxando os últimos 12 meses para somar o acumulado
        const ipcaResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/12?formato=json', {
            next: { revalidate: 86400 }
        });
        const ipcaData = await ipcaResponse.json();
        
        // Calculate IPCA 12M Accumulation
        // (1 + i1) * (1 + i2) ... - 1
        interface BCBDataPoint {
            data: string;
            valor: string;
        }
        const ipcaAccumulated = ipcaData.reduce((acc: number, curr: BCBDataPoint) => {
            return acc * (1 + (parseFloat(curr.valor) / 100));
        }, 1) - 1;

        // Structured Sovereign Data Response
        const marketData = {
            timestamp: new Date().toISOString(),
            rates: {
                selic: parseFloat(selicData[0].valor),
                ipca_12m: parseFloat((ipcaAccumulated * 100).toFixed(2))
            },
            currencies: {
                usd: hgData.results.currencies.USD,
                eur: hgData.results.currencies.EUR
            },
            indices: {
                ibovespa: hgData.results.stocks.IBOVESPA
            }
        };

        return NextResponse.json(marketData);

    } catch (error) {
        console.error('Sovereign Hub Error:', error);
        
        // Failsafe Mock Data if API limits are reached
        return NextResponse.json({
            timestamp: new Date().toISOString(),
            status: "failsafe",
            rates: { selic: 11.25, ipca_12m: 4.5 },
            currencies: {
                usd: { buy: 5.85, variation: 0 },
                eur: { buy: 6.20, variation: 0 }
            },
            indices: {
                ibovespa: { points: 130000, variation: 0 }
            }
        });
    }
}

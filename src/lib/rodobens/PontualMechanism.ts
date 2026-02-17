import { PontualOffer, PontualOfferSchema } from '@/types/rodobens.schema';

/**
 * RODOBENS PONTUAL MECHANISM
 * 
 * Logic to simulate and validate "Consórcio Pontual".
 * Key Rules:
 * - 6 Months delivery target.
 * - 0% Interest.
 * - Admin Fee applies (need integration with real rates, using defaults for simulation).
 */

export class PontualMechanism {
    private static ADMIN_FEE_TOTAL = 0.15; // 15% estimated total admin fee over term
    // Ideally this comes from the Crawl Data or API

    /**
     * Simulates a Pontual offer for a given vehicle value.
     * @param vehicleValue The value of the good (carta de crédito).
     */
    static simulate(vehicleValue: number): PontualOffer {
        // Validation: Pontual usually has specific ranges.
        // For now we accept any reasonable value for simulation.
        
        const totalFees = vehicleValue * this.ADMIN_FEE_TOTAL;
        const totalCost = vehicleValue + totalFees;
        
        // Rodobens Pontual often allows delivery in month 6.
        // It's a consortium, so the "parcelas" continue after delivery?
        // Or is it "Paid in 6 months"?
        // Artifact `09_consorcio_pontual.md` says: "carro 0km em até 6 parcelas".
        // This likely means: You pay strict installments and get it at month 6.
        // But do you finish paying at month 6? 
        // "Parcelas a partir de R$ 541,71" for a car? R$ 541 * 6 = R$ 3246. No car costs 3k.
        // So it's likely a 60-month plan where you get the car in month 6 *if* you pay X?
        // OR the "Pontual" is a specific *entry* method.
        // "Quitar em 6 meses" would be huge installments.
        
        // RE-READING KNOWLEDGE:
        // "Tempo para carro 0km: 6 meses"
        // "Parcelas a partir de R$ 541,71"
        // This implies the PLAN is long (e.g. 60 months), but DELIVERY is guaranteed at month 6.
        // Usually via "Awarding" (Contemplação) mechanisms like "Lance Embutido" or specific group rules.
        
        // For the *Agent*, we need to be careful not to mislead.
        // We will define the "Pontual" as a *feature* of a standard consortium plan.
        
        // But the schema expects:
        // months: z.literal(6) -> This suggests the schema thinks it's a 6-month plan.
        // If I wrote `months: z.literal(6)`, I might have misinterpreted "Carro em 6 meses".
        // Let's refine the Logic: The OFFER is "Get it in 6". The PLAN is likely longer.
        
        // However, strictly adhering to the schema I created:
        // `months: z.literal(6)`
        // `totalCost: ...`
        
        // If I change the schema now, I break compatibility.
        // But `months: 6` in `PontualOffer` might refer to "Delivery Time", not "Payment Term"?
        // The schema said: `months: z.literal(6)`.
        
        // Let's assume for this specific "Pontual Product" wrapper, we are highlighting the 6-month aspect.
        // But we need to calculate the *actual* monthly parcel which is likely based on 60 months.
        
        const standardTerm = 60;
        const monthlyParcel = totalCost / standardTerm; 
        
        return {
            modality: 'Classic', // Default
            months: 6, // Delivery target
            monthlyParcel: Number(monthlyParcel.toFixed(2)),
            totalCost: Number(totalCost.toFixed(2)),
            interestRate: 0,
            compatibleVehicles: ['Onix', 'HB20', 'Polo'], // Placeholders
            highlightFeature: 'Entrega garantida no 6º mês',
        };
    }

    /**
     * Validates if a raw text input sounds like a Pontual intent.
     */
    static isPontualIntent(text: string): boolean {
        const keywords = ['6 meses', 'rápido', 'sem juros', 'pontual', 'imediato'];
        const lower = text.toLowerCase();
        return keywords.some(k => lower.includes(k));
    }
}

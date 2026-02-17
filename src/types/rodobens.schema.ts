import { z } from 'zod';

// --- Consórcio Pontual (6 Months) ---

export const PontualModalitySchema = z.enum(['Classic', 'Plus', 'Premium']);

export const PontualOfferSchema = z.object({
  modality: PontualModalitySchema,
  months: z.literal(6),
  monthlyParcel: z.number().describe('Fixed monthly installment value'),
  totalCost: z.number().describe('Total cost after 6 months (should equal explicit sum of parcels)'),
  interestRate: z.literal(0).describe('Pontual always has 0% interest'),
  compatibleVehicles: z.array(z.string()).describe('List of example vehicles for this tier'),
  // Tuning parameters for the UI
  highlightFeature: z.string().optional().describe('Key marketing feature to display on card'),
});

// --- Financing (CDC) ---

export const FinancingScenarioSchema = z.object({
  vehicleValue: z.number(),
  downPayment: z.number().describe('Entry payment value'),
  financedAmount: z.number().describe('Principal amount financed'),
  months: z.number().min(12).max(60),
  monthlyInterestRate: z.number().describe('Monthly interest rate in percentage (e.g. 1.5)'),
  annualInterestRate: z.number().describe('Annual interest rate in percentage (e.g. 18.0)'),
  monthlyParcel: z.number().describe('Calculated PMT value'),
  totalPaid: z.number().describe('Total amount paid at end of term'),
  totalInterestPaid: z.number().describe('Total interest paid over the term'),
});

// --- Comparative Engine Output ---

export const FinancialComparisonSchema = z.object({
  scenarioName: z.string(),
  vehicleValue: z.number(),
  
  // Side by Side
  pontual: PontualOfferSchema,
  financing: FinancingScenarioSchema,
  
  // The "Delta" - Marketing Gold
  totalSavings: z.number().describe('Absolute value saved by choosing Pontual (Financing Total - Pontual Total)'),
  timeSavedMonths: z.number().describe('Months saved (Financing Months - 6)'),
});

// --- Telemedicine (Cross-Sell) ---

export const DigiMedPlanSchema = z.object({
  name: z.string(),
  priceMonthly: z.number(),
  beneficiariesLimit: z.number(),
  features: z.array(z.string()),
  savingsAnnualEstimate: z.number().describe('Estimated annual savings vs private consultations'),
});

// --- Aggregated Product Data ---

export const RodobensProductDataSchema = z.object({
  pontualOffers: z.array(PontualOfferSchema),
  financingRates: z.object({
    minRatePm: z.number(),
    maxRatePm: z.number(),
    defaultTerm: z.number(),
  }),
  telemedicine: DigiMedPlanSchema,
  lastUpdated: z.string().datetime(),
});

export type PontualModality = z.infer<typeof PontualModalitySchema>;
export type PontualOffer = z.infer<typeof PontualOfferSchema>;
export type FinancingScenario = z.infer<typeof FinancingScenarioSchema>;
export type FinancialComparison = z.infer<typeof FinancialComparisonSchema>;
export type DigiMedPlan = z.infer<typeof DigiMedPlanSchema>;
export type RodobensProductData = z.infer<typeof RodobensProductDataSchema>;

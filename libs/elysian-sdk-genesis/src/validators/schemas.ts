// libs/elysian-sdk-genesis/src/validators/schemas.ts
// Zod Schemas for Type-Safe Validation

import { z } from 'zod';

// =============================================================================
// DOMAIN SCHEMAS
// =============================================================================

export const GenesisDomainSchema = z.enum(['wealth', 'seguros', 'juridico', 'consortium']);
export const GenesisEmotionSchema = z.enum(['confianca', 'urgencia', 'exclusividade', 'tecnologia']);

// =============================================================================
// CTA ACTION SCHEMA
// =============================================================================

export const CtaActionSchema = z.object({
  label: z.string().min(1, 'CTA label is required'),
  action: z.enum(['openChat', 'scrollTo', 'navigate']),
  target: z.string().optional(),
});

// =============================================================================
// INTAKE CONSTRAINTS SCHEMA
// =============================================================================

export const IntakeConstraintsSchema = z.object({
  tokensOnly: z.boolean().default(true),
  accessibility: z.enum(['minimum', 'aaa']).default('aaa'),
  noHardcode: z.boolean().default(true),
});

// =============================================================================
// INTAKE CONTRACT SCHEMA (The Main Input)
// =============================================================================

export const IntakeContractSchema = z.object({
  objective: z.string().min(10, 'Objective must be at least 10 characters'),
  audience: z.string().min(5, 'Audience description required'),
  domain: GenesisDomainSchema,
  emotion: GenesisEmotionSchema,
  primaryCta: CtaActionSchema,
  requiredStates: z.array(z.enum(['happy', 'loading', 'error', 'empty'])).min(1),
  constraints: IntakeConstraintsSchema,
});

// =============================================================================
// SECTION TYPE SCHEMA
// =============================================================================

export const SectionTypeSchema = z.enum([
  'HeroSection',
  'ServicesSection',
  'SocialProofSection',
  'CallToActionSection',
  'SimulatorSection',
  'NotificationBar',
  'ContentSection',
  'ContactSection',
  'TestimonialSection',
  'PricingSection',
  'FAQSection',
]);

// =============================================================================
// SECTION SPEC SCHEMA
// =============================================================================

export const SectionSpecSchema = z.object({
  id: z.string().min(1),
  type: SectionTypeSchema,
  variant: z.string().min(1),
  propsRef: z.string().min(1),
  isVisible: z.boolean(),
});

// =============================================================================
// TOKEN MAP SCHEMA (With Governance Rules)
// =============================================================================

// Regex to ensure token format (no hardcoded values)
const tokenPatternRegex = /^[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;

export const TokenMapSchema = z.object({
  surface: z.string().regex(tokenPatternRegex, 'Surface must be a token reference (e.g., surface.wealth.base)'),
  text: z.string().regex(tokenPatternRegex, 'Text must be a token reference'),
  accent: z.string().regex(tokenPatternRegex, 'Accent must be a token reference'),
  spacing: z.string().regex(tokenPatternRegex, 'Spacing must be a token reference'),
});

// =============================================================================
// LAYOUT SPEC CONTRACT SCHEMA (The Main Output)
// =============================================================================

export const LayoutSpecContractSchema = z.object({
  template: z.enum(['Landing', 'AppShell']),
  skin: z.string().min(1),
  sections: z.array(SectionSpecSchema).min(1, 'At least one section required'),
  tokens: TokenMapSchema,
  meta: z.object({
    generatedAt: z.string().datetime(),
    composerVersion: z.string(),
    hash: z.string().min(1),
  }),
});

// =============================================================================
// TYPE EXPORTS (Inferred from Zod)
// =============================================================================

export type IntakeContractValidated = z.infer<typeof IntakeContractSchema>;
export type LayoutSpecContractValidated = z.infer<typeof LayoutSpecContractSchema>;
export type SectionSpecValidated = z.infer<typeof SectionSpecSchema>;
export type TokenMapValidated = z.infer<typeof TokenMapSchema>;

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

export function validateIntakeContract(input: unknown): IntakeContractValidated {
  return IntakeContractSchema.parse(input);
}

export function validateLayoutSpec(input: unknown): LayoutSpecContractValidated {
  return LayoutSpecContractSchema.parse(input);
}

export function safeValidateIntakeContract(input: unknown) {
  return IntakeContractSchema.safeParse(input);
}

export function safeValidateLayoutSpec(input: unknown) {
  return LayoutSpecContractSchema.safeParse(input);
}

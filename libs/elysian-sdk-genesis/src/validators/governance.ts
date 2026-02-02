// libs/elysian-sdk-genesis/src/validators/governance.ts
// Anti-Frankenstein Validators - Hard-Coded Governance Rules

// =============================================================================
// FORBIDDEN PATTERNS (The "Anti-Frankenstein" Rules)
// =============================================================================

/** Patterns that indicate hardcoded values */
const FORBIDDEN_PATTERNS = {
  // Hex colors: #fff, #ffffff, #FFF123
  HEX_COLOR: /#([0-9A-Fa-f]{3}){1,2}\b/g,
  
  // RGB/RGBA: rgb(0,0,0), rgba(255, 255, 255, 0.5)
  RGB_COLOR: /rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+)?\s*\)/gi,
  
  // HSL/HSLA: hsl(0, 100%, 50%)
  HSL_COLOR: /hsla?\s*\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*(,\s*[\d.]+)?\s*\)/gi,
  
  // Magic numbers in px: 24px, 100px (except 0px which is acceptable)
  MAGIC_PIXELS: /\b(?!0px\b)\d{1,4}px\b/g,
  
  // Magic numbers in rem: 1.5rem, 2rem
  MAGIC_REM: /\b\d+(\.\d+)?rem\b/g,
  
  // Z-index magic: z-index: 9999
  MAGIC_ZINDEX: /z-index:\s*\d{2,}/gi,
  
  // Inline styles (should use classes/tokens)
  INLINE_STYLE: /style\s*=\s*["'][^"']+["']/gi,
};

// =============================================================================
// GOVERNANCE RESULT TYPES
// =============================================================================

export interface GovernanceViolation {
  rule: keyof typeof FORBIDDEN_PATTERNS;
  match: string;
  line?: number;
  severity: 'error' | 'warning';
  message: string;
}

export interface GovernanceResult {
  isValid: boolean;
  violations: GovernanceViolation[];
  score: number; // 0-100
}

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

/**
 * Scans a string (CSS, JSX, etc.) for governance violations
 */
export function validateGovernance(content: string): GovernanceResult {
  const violations: GovernanceViolation[] = [];
  
  // Check each forbidden pattern
  for (const [rule, pattern] of Object.entries(FORBIDDEN_PATTERNS)) {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach((match) => {
        violations.push({
          rule: rule as keyof typeof FORBIDDEN_PATTERNS,
          match,
          severity: rule.includes('COLOR') ? 'error' : 'warning',
          message: getViolationMessage(rule as keyof typeof FORBIDDEN_PATTERNS, match),
        });
      });
    }
  }
  
  // Calculate score (100 = perfect, 0 = disaster)
  const score = Math.max(0, 100 - (violations.length * 10));
  
  return {
    isValid: violations.filter(v => v.severity === 'error').length === 0,
    violations,
    score,
  };
}

/**
 * Validates that a variant name follows the token convention
 */
export function validateVariantName(variant: string): boolean {
  // Variant should be kebab-case: "cinematic-dark", "glass-frost"
  return /^[a-z]+(-[a-z]+)*$/.test(variant);
}

/**
 * Validates that a propsRef follows the dot notation: "hero.wealth"
 */
export function validatePropsRef(propsRef: string): boolean {
  return /^[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/.test(propsRef);
}

/**
 * Validates an entire component file for governance compliance
 */
export function auditComponentFile(content: string): GovernanceResult & { 
  recommendations: string[] 
} {
  const result = validateGovernance(content);
  const recommendations: string[] = [];
  
  // Generate recommendations based on violations
  if (result.violations.some(v => v.rule === 'HEX_COLOR')) {
    recommendations.push('Replace hex colors with token references: tokens.colors.primary');
  }
  if (result.violations.some(v => v.rule === 'MAGIC_PIXELS')) {
    recommendations.push('Replace pixel values with spacing tokens: tokens.spacing.md');
  }
  if (result.violations.some(v => v.rule === 'INLINE_STYLE')) {
    recommendations.push('Move inline styles to CSS classes or Tailwind utilities');
  }
  
  return { ...result, recommendations };
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function getViolationMessage(
  rule: keyof typeof FORBIDDEN_PATTERNS,
  match: string
): string {
  const messages: Record<keyof typeof FORBIDDEN_PATTERNS, string> = {
    HEX_COLOR: `Hardcoded color "${match}" detected. Use tokens.colors.* instead.`,
    RGB_COLOR: `Hardcoded RGB "${match}" detected. Use tokens.colors.* instead.`,
    HSL_COLOR: `Hardcoded HSL "${match}" detected. Use tokens.colors.* instead.`,
    MAGIC_PIXELS: `Magic number "${match}" detected. Use tokens.spacing.* instead.`,
    MAGIC_REM: `Magic rem value "${match}" detected. Use tokens.spacing.* instead.`,
    MAGIC_ZINDEX: `Magic z-index detected. Use tokens.zIndex.* instead.`,
    INLINE_STYLE: `Inline style detected. Use CSS classes or Tailwind utilities.`,
  };
  
  return messages[rule];
}

// =============================================================================
// EXPORTS
// =============================================================================

export const GOVERNANCE_RULES = FORBIDDEN_PATTERNS;

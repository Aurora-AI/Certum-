// libs/elysian-sdk-genesis/src/composer/compose.ts
// v2.0.0-Sovereign: Advanced Narrative Logic

import { IntakeContract, GenesisDomain } from '../types/intake';
import { LayoutSpecContract, SectionSpec, SectionType } from '../types/layout';

const COMPOSER_VERSION = '2.0.0-Sovereign';

// =============================================================================
// BLUEPRINTS: Catálogo de "Blocos de LEGO" por Domínio
// =============================================================================
type BlueprintSection = Omit<SectionSpec, 'isVisible'>;

const BLUEPRINTS: Record<GenesisDomain, BlueprintSection[]> = {
  wealth: [
    // Narrativa: Soco Visual → Prova de Valor → Ação
    { id: 'hero', type: 'HeroSection', variant: 'cinematic-dark', propsRef: 'hero.wealth' },
    { id: 'simulator', type: 'SimulatorSection', variant: 'card-stack-glass', propsRef: 'sim.wealth' },
    { id: 'proof', type: 'SocialProofSection', variant: 'ticker-minimal', propsRef: 'social.investors' },
    { id: 'cta', type: 'CallToActionSection', variant: 'sovereign', propsRef: 'cta.wealth' }
  ],
  juridico: [
    // Narrativa: Confiança → Credenciais → Contato
    { id: 'hero', type: 'HeroSection', variant: 'trust-light', propsRef: 'hero.law' },
    { id: 'bio', type: 'ContentSection', variant: 'partner-profile', propsRef: 'bio.partners' },
    { id: 'testimonials', type: 'TestimonialSection', variant: 'quotes-grid', propsRef: 'testimonials.law' },
    { id: 'contact', type: 'ContactSection', variant: 'urgent-form', propsRef: 'contact.law' }
  ],
  seguros: [
    // Narrativa: Proteção → Benefícios → Urgência
    { id: 'hero', type: 'HeroSection', variant: 'protection-shield', propsRef: 'hero.insurance' },
    { id: 'benefits', type: 'ServicesSection', variant: 'icon-grid', propsRef: 'services.insurance' },
    { id: 'faq', type: 'FAQSection', variant: 'accordion', propsRef: 'faq.insurance' },
    { id: 'cta', type: 'CallToActionSection', variant: 'urgent', propsRef: 'cta.insurance' }
  ],
  consortium: [
    // Narrativa: Oportunidade → Simulação → Prova Social
    { id: 'hero', type: 'HeroSection', variant: 'opportunity', propsRef: 'hero.consortium' },
    { id: 'simulator', type: 'SimulatorSection', variant: 'interactive-calc', propsRef: 'sim.consortium' },
    { id: 'proof', type: 'SocialProofSection', variant: 'stats-counter', propsRef: 'social.consortium' },
    { id: 'cta', type: 'CallToActionSection', variant: 'step-by-step', propsRef: 'cta.consortium' }
  ]
};

// =============================================================================
// EMOTION MODIFIERS: Ajustes baseados na emoção dominante
// =============================================================================
interface EmotionModifier {
  prepend?: BlueprintSection[];
  append?: BlueprintSection[];
  variantOverrides?: Partial<Record<SectionType, string>>;
}

const EMOTION_MODIFIERS: Record<string, EmotionModifier> = {
  urgencia: {
    // Se for urgente, adiciona barra de alerta no topo
    prepend: [
      { id: 'alert', type: 'NotificationBar', variant: 'sticky-alert', propsRef: 'alert.urgent' }
    ],
    variantOverrides: {
      'CallToActionSection': 'countdown', // CTA com timer
      'HeroSection': 'bold-urgent'
    }
  },
  exclusividade: {
    // Se for exclusivo, adiciona seção de acesso privado
    append: [
      { id: 'vip', type: 'ContentSection', variant: 'private-access', propsRef: 'content.vip' }
    ],
    variantOverrides: {
      'HeroSection': 'vip-gate',
      'CallToActionSection': 'request-access'
    }
  },
  tecnologia: {
    variantOverrides: {
      'HeroSection': 'tech-forward',
      'SimulatorSection': 'ai-powered'
    }
  },
  confianca: {
    // Se for confiança, adiciona seção de certificações
    append: [
      { id: 'trust', type: 'SocialProofSection', variant: 'certifications', propsRef: 'social.trust' }
    ]
  }
};

// =============================================================================
// COMPOSER: A Função Principal
// =============================================================================
export function composeGenesisLayout(intake: IntakeContract): LayoutSpecContract {
  // 1. Validação (Fail Fast)
  if (!intake.domain) throw new Error("[Elysian Composer] Intake missing 'domain'");
  if (!intake.emotion) throw new Error("[Elysian Composer] Intake missing 'emotion'");

  // 2. Seleção de Blueprint base
  const blueprint = BLUEPRINTS[intake.domain];
  if (!blueprint) {
    console.warn(`[Elysian Composer] Unknown domain '${intake.domain}', falling back to 'wealth'`);
  }
  let sections: BlueprintSection[] = [...(blueprint || BLUEPRINTS.wealth)];

  // 3. Aplicar modificadores de emoção
  const modifier = EMOTION_MODIFIERS[intake.emotion];
  if (modifier) {
    // Prepend sections (ex: NotificationBar no topo)
    if (modifier.prepend) {
      sections = [...modifier.prepend, ...sections];
    }
    // Append sections (ex: VIP section no final)
    if (modifier.append) {
      sections = [...sections, ...modifier.append];
    }
    // Override variants based on emotion
    if (modifier.variantOverrides) {
      sections = sections.map(sec => {
        const override = modifier.variantOverrides?.[sec.type];
        return override ? { ...sec, variant: override } : sec;
      });
    }
  }

  // 4. Converter para SectionSpec completo (adicionar isVisible)
  const finalSections: SectionSpec[] = sections.map(sec => ({
    ...sec,
    isVisible: true
  }));

  // 5. Gerar hash único para cache invalidation
  const hash = generateLayoutHash(intake, finalSections);

  // 6. Montagem Final
  return {
    template: 'Landing',
    skin: intake.domain,
    sections: finalSections,
    tokens: {
      surface: `surface.${intake.domain}.base`,
      text: `text.${intake.domain}.primary`,
      accent: `accent.${intake.emotion}`,
      spacing: 'spacing.md'
    },
    meta: {
      generatedAt: new Date().toISOString(),
      composerVersion: COMPOSER_VERSION,
      hash
    }
  };
}

// =============================================================================
// UTILITIES
// =============================================================================
function generateLayoutHash(intake: IntakeContract, sections: SectionSpec[]): string {
  const input = JSON.stringify({
    domain: intake.domain,
    emotion: intake.emotion,
    sectionIds: sections.map(s => s.id)
  });
  
  // Simple hash for determinism (replace with crypto hash if needed)
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `v2-${Math.abs(hash).toString(36)}`;
}

// =============================================================================
// EXPORTS FOR TESTING
// =============================================================================
export { BLUEPRINTS, EMOTION_MODIFIERS };

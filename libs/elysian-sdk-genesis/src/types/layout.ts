// libs/elysian-sdk-genesis/src/types/layout.ts

export type SectionType = 
  | 'HeroSection' 
  | 'ServicesSection' 
  | 'SocialProofSection' 
  | 'CallToActionSection' 
  | 'SimulatorSection'
  | 'NotificationBar'
  | 'ContentSection'
  | 'ContactSection'
  | 'TestimonialSection'
  | 'PricingSection'
  | 'FAQSection';

export interface SectionSpec {
  id: string;
  type: SectionType;
  variant: string; // ex: 'trust', 'cards', 'phantom'
  propsRef: string; // Referência ao conteúdo no CMS/Data
  isVisible: boolean;
}

export interface TokenMap {
  surface: string;
  text: string;
  accent: string;
  spacing: string;
}

export interface LayoutSpecContract {
  template: 'Landing' | 'AppShell';
  skin: string;
  sections: SectionSpec[];
  tokens: TokenMap;
  meta: {
    generatedAt: string;
    composerVersion: string;
    hash: string;
  };
}

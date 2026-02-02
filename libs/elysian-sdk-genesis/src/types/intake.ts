// libs/elysian-sdk-genesis/src/types/intake.ts

export type GenesisDomain = 'wealth' | 'seguros' | 'juridico' | 'consortium';
export type GenesisEmotion = 'confianca' | 'urgencia' | 'exclusividade' | 'tecnologia';

export interface CtaAction {
  label: string;
  action: 'openChat' | 'scrollTo' | 'navigate';
  target?: string;
}

export interface IntakeConstraints {
  tokensOnly: boolean;
  accessibility: 'minimum' | 'aaa';
  noHardcode: boolean;
}

export interface IntakeContract {
  objective: string;
  audience: string;
  domain: GenesisDomain;
  emotion: GenesisEmotion;
  primaryCta: CtaAction;
  requiredStates: ('happy' | 'empty' | 'error')[];
  constraints: IntakeConstraints;
}

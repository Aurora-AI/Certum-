import * as THREE from 'three';
import { ParticleEmitter } from './ParticleEmitter';

/**
 * ============================================
 * PARTICLE PRESETS - READY-TO-USE EFFECTS
 * ============================================
 * Biblioteca de efeitos pré-configurados para uso imediato
 */

export const ParticlePresets = {
  
  // ========================================
  // PREMIUM AMBIENT EFFECTS
  // ========================================
  
  /**
   * Floating Dust - Partículas sutis flutuando no ar
   */
  floatingDust: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 50,
      maxParticles: 2000,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'box',
      emitterSize: 20,
      
      particleSize: 0.05,
      particleSizeVariation: 0.8,
      
      velocityDirection: new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 0.1,
      velocityVariation: 0.5,
      velocitySpread: 1,
      
      gravity: new THREE.Vector3(0, 0.02, 0),
      drag: 0.02,
      turbulence: 0.05,
      
      lifetime: 10,
      lifetimeVariation: 0.5,
      
      startColor: new THREE.Color(options.color || '#ffffff'),
      endColor: new THREE.Color(options.color || '#ffffff'),
      
      startOpacity: 0,
      endOpacity: 0.3,
      opacityCurve: 'smooth',
      
      startScale: 0.5,
      endScale: 1,
      scaleCurve: 'ease',
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  /**
   * Golden Sparkles - Brilhos dourados premium
   */
  goldenSparkles: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 30,
      maxParticles: 1000,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'sphere',
      emitterSize: 5,
      
      particleSize: 0.15,
      particleSizeVariation: 0.6,
      
      velocityDirection: new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 0.5,
      velocityVariation: 0.4,
      velocitySpread: 0.3,
      
      gravity: new THREE.Vector3(0, -0.2, 0),
      drag: 0.01,
      turbulence: 0.1,
      
      lifetime: 3,
      lifetimeVariation: 0.5,
      
      startColor: new THREE.Color('#FFD700'),
      endColor: new THREE.Color('#FFA500'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'smooth',
      
      startScale: 0,
      endScale: 1.5,
      scaleCurve: 'smooth',
      
      rotation: true,
      rotationSpeed: 2,
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  /**
   * Smoke Rising - Fumaça subindo suavemente
   */
  smokeRising: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 20,
      maxParticles: 500,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'sphere',
      emitterSize: 0.5,
      
      particleSize: 1,
      particleSizeVariation: 0.5,
      
      velocityDirection: new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 0.3,
      velocityVariation: 0.3,
      velocitySpread: 0.2,
      
      gravity: new THREE.Vector3(0, 0.1, 0),
      drag: 0.02,
      turbulence: 0.15,
      
      lifetime: 5,
      lifetimeVariation: 0.4,
      
      startColor: new THREE.Color(options.color || '#888888'),
      endColor: new THREE.Color(options.color || '#444444'),
      colorCurve: 'linear',
      
      startOpacity: 0.6,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 0.5,
      endScale: 2,
      scaleCurve: 'linear',
      
      rotation: true,
      rotationSpeed: 0.5,
      
      blending: THREE.NormalBlending,
    });
  },
  
  // ========================================
  // ENERGY EFFECTS
  // ========================================
  
  /**
   * Energy Flow - Fluxo de energia
   */
  energyFlow: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 100,
      maxParticles: 3000,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'point',
      emitterSize: 0,
      
      particleSize: 0.08,
      particleSizeVariation: 0.5,
      
      velocityDirection: options.direction || new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 2,
      velocityVariation: 0.3,
      velocitySpread: 0.1,
      
      gravity: new THREE.Vector3(0, 0, 0),
      drag: 0.005,
      turbulence: 0.05,
      
      lifetime: 2,
      lifetimeVariation: 0.3,
      
      startColor: new THREE.Color(options.color || '#00ffff'),
      endColor: new THREE.Color(options.endColor || '#0088ff'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 1,
      endScale: 0.2,
      scaleCurve: 'ease',
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  /**
   * Electric Sparks - Faíscas elétricas
   */
  electricSparks: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 50,
      maxParticles: 1000,
      burst: true,
      burstCount: 50,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'point',
      emitterSize: 0,
      
      particleSize: 0.1,
      particleSizeVariation: 0.7,
      
      velocityDirection: new THREE.Vector3(0, 0, 0),
      velocityMagnitude: 3,
      velocityVariation: 0.5,
      velocitySpread: 1,
      
      gravity: new THREE.Vector3(0, -2, 0),
      drag: 0.03,
      turbulence: 0.2,
      
      lifetime: 0.5,
      lifetimeVariation: 0.3,
      
      startColor: new THREE.Color('#ffffff'),
      endColor: new THREE.Color('#00aaff'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 1,
      endScale: 0,
      scaleCurve: 'ease',
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  // ========================================
  // MAGICAL EFFECTS
  // ========================================
  
  /**
   * Magic Aura - Aura mágica
   */
  magicAura: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 60,
      maxParticles: 2000,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'sphere',
      emitterSize: 2,
      
      particleSize: 0.12,
      particleSizeVariation: 0.6,
      
      velocityDirection: new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 0.3,
      velocityVariation: 0.5,
      velocitySpread: 0.8,
      
      gravity: new THREE.Vector3(0, 0.05, 0),
      drag: 0.02,
      turbulence: 0.2,
      
      lifetime: 4,
      lifetimeVariation: 0.5,
      
      startColor: new THREE.Color(options.color || '#8800ff'),
      endColor: new THREE.Color(options.endColor || '#ff00ff'),
      colorCurve: 'smooth',
      
      startOpacity: 0,
      endOpacity: 0.8,
      opacityCurve: 'smooth',
      
      startScale: 0,
      endScale: 1.2,
      scaleCurve: 'smooth',
      
      rotation: true,
      rotationSpeed: 1.5,
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  /**
   * Fairy Dust - Poeira de fada
   */
  fairyDust: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 80,
      maxParticles: 2500,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'sphere',
      emitterSize: 1,
      
      particleSize: 0.06,
      particleSizeVariation: 0.8,
      
      velocityDirection: new THREE.Vector3(0, 0, 1),
      velocityMagnitude: 0.5,
      velocityVariation: 0.6,
      velocitySpread: 1,
      
      gravity: new THREE.Vector3(0, 0.1, 0),
      drag: 0.015,
      turbulence: 0.3,
      
      lifetime: 3,
      lifetimeVariation: 0.5,
      
      startColor: new THREE.Color('#ffccff'),
      endColor: new THREE.Color('#88ffff'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 0.3,
      endScale: 1,
      scaleCurve: 'smooth',
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  // ========================================
  // WEATHER EFFECTS
  // ========================================
  
  /**
   * Rain - Chuva
   */
  rain: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 500,
      maxParticles: 5000,
      
      position: options.position || new THREE.Vector3(0, 10, 0),
      emitterShape: 'box',
      emitterSize: 20,
      
      particleSize: 0.03,
      particleSizeVariation: 0.3,
      
      velocityDirection: new THREE.Vector3(0, -1, 0),
      velocityMagnitude: 10,
      velocityVariation: 0.2,
      velocitySpread: 0.05,
      
      gravity: new THREE.Vector3(0, -2, 0),
      drag: 0,
      turbulence: 0.02,
      
      lifetime: 2,
      lifetimeVariation: 0.2,
      
      startColor: new THREE.Color('#88aaff'),
      endColor: new THREE.Color('#ffffff'),
      
      startOpacity: 0.6,
      endOpacity: 0.3,
      opacityCurve: 'linear',
      
      startScale: 1,
      endScale: 1,
      
      blending: THREE.NormalBlending,
    });
  },
  
  /**
   * Snow - Neve
   */
  snow: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 200,
      maxParticles: 3000,
      
      position: options.position || new THREE.Vector3(0, 10, 0),
      emitterShape: 'box',
      emitterSize: 20,
      
      particleSize: 0.15,
      particleSizeVariation: 0.5,
      
      velocityDirection: new THREE.Vector3(0, -1, 0),
      velocityMagnitude: 0.5,
      velocityVariation: 0.3,
      velocitySpread: 0.1,
      
      gravity: new THREE.Vector3(0, -0.1, 0),
      drag: 0.01,
      turbulence: 0.3,
      
      lifetime: 10,
      lifetimeVariation: 0.3,
      
      startColor: new THREE.Color('#ffffff'),
      endColor: new THREE.Color('#e8f4ff'),
      
      startOpacity: 0.9,
      endOpacity: 0.9,
      
      startScale: 0.5,
      endScale: 1,
      scaleCurve: 'ease',
      
      rotation: true,
      rotationSpeed: 0.5,
      
      blending: THREE.NormalBlending,
    });
  },
  
  // ========================================
  // FINANCIAL/PREMIUM EFFECTS
  // ========================================
  
  /**
   * Currency Flow - Fluxo de moedas/valores
   */
  currencyFlow: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: options.emissionRate || 40,
      maxParticles: 1500,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'box',
      emitterSize: 3,
      
      particleSize: 0.2,
      particleSizeVariation: 0.4,
      
      velocityDirection: new THREE.Vector3(1, 0.5, 0),
      velocityMagnitude: 1,
      velocityVariation: 0.3,
      velocitySpread: 0.2,
      
      gravity: new THREE.Vector3(0, 0, 0),
      drag: 0.015,
      turbulence: 0.1,
      
      lifetime: 5,
      lifetimeVariation: 0.4,
      
      startColor: new THREE.Color('#d4af37'), // Gold
      endColor: new THREE.Color('#ffd700'),
      colorCurve: 'ease',
      
      startOpacity: 0,
      endOpacity: 0.9,
      opacityCurve: 'smooth',
      
      startScale: 0,
      endScale: 1,
      scaleCurve: 'smooth',
      
      rotation: true,
      rotationSpeed: 1,
      
      blending: THREE.AdditiveBlending,
    });
  },
  
  /**
   * Success Burst - Explosão de sucesso
   */
  successBurst: (options = {}) => {
    return new ParticleEmitter({
      emissionRate: 0,
      maxParticles: 200,
      burst: true,
      burstCount: 200,
      
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: 'point',
      emitterSize: 0,
      
      particleSize: 0.15,
      particleSizeVariation: 0.6,
      
      velocityDirection: new THREE.Vector3(0, 1, 0),
      velocityMagnitude: 4,
      velocityVariation: 0.5,
      velocitySpread: 1,
      
      gravity: new THREE.Vector3(0, -3, 0),
      drag: 0.02,
      turbulence: 0.1,
      
      lifetime: 2,
      lifetimeVariation: 0.4,
      
      startColor: new THREE.Color('#00ff00'),
      endColor: new THREE.Color('#ffff00'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 1,
      endScale: 0.2,
      scaleCurve: 'ease',
      
      blending: THREE.AdditiveBlending,
    });
  },
};

export default ParticlePresets;

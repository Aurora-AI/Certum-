import * as THREE from 'three';
import { ParticleSystem } from './ParticleSystem';
import { ParticleEmitter } from './ParticleEmitter';
import { ParticlePresets } from './ParticlePresets';

/**
 * ============================================
 * PARTICLE EFFECTS - USAGE EXAMPLES
 * ============================================
 * Exemplos de como usar os sistemas de partículas
 */

export class ParticleEffectsManager {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    
    this.systems = new Map();
    this.emitters = new Map();
    
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    
    this.init();
  }
  
  init() {
    // Event listeners para mouse
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }
  
  onMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  
  // ========================================
  // EXEMPLO 1: Ambiente Premium com Floating Dust
  // ========================================
  
  createPremiumAmbient() {
    const dust = ParticlePresets.floatingDust({
      emissionRate: 30,
      color: '#ffffff',
      position: new THREE.Vector3(0, 0, 0),
    });
    
    this.scene.add(dust.getMesh());
    this.emitters.set('ambient-dust', dust);
    
    return dust;
  }
  
  // ========================================
  // EXEMPLO 2: Hero Section com Golden Sparkles
  // ========================================
  
  createHeroSparkles() {
    const sparkles = ParticlePresets.goldenSparkles({
      emissionRate: 20,
      position: new THREE.Vector3(0, 2, 0),
    });
    
    this.scene.add(sparkles.getMesh());
    this.emitters.set('hero-sparkles', sparkles);
    
    return sparkles;
  }
  
  // ========================================
  // EXEMPLO 3: Background com Energy Flow
  // ========================================
  
  createEnergyBackground() {
    // Múltiplos fluxos de energia em diferentes direções
    const directions = [
      new THREE.Vector3(1, 0.2, 0),
      new THREE.Vector3(-1, 0.2, 0),
      new THREE.Vector3(0, 1, 0.2),
    ];
    
    const colors = ['#00ffff', '#ff00ff', '#ffff00'];
    
    directions.forEach((direction, index) => {
      const energy = ParticlePresets.energyFlow({
        emissionRate: 50,
        direction: direction,
        color: colors[index],
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          -5,
          (Math.random() - 0.5) * 10
        ),
      });
      
      this.scene.add(energy.getMesh());
      this.emitters.set(`energy-${index}`, energy);
    });
  }
  
  // ========================================
  // EXEMPLO 4: Cursor Effect Interativo
  // ========================================
  
  createCursorEffect() {
    const cursorParticles = new ParticleEmitter({
      emissionRate: 100,
      maxParticles: 2000,
      
      position: new THREE.Vector3(0, 0, 0),
      emitterShape: 'point',
      
      particleSize: 0.1,
      particleSizeVariation: 0.5,
      
      velocityDirection: new THREE.Vector3(0, 0, 0),
      velocityMagnitude: 0.5,
      velocityVariation: 0.8,
      velocitySpread: 1,
      
      gravity: new THREE.Vector3(0, 0, 0),
      drag: 0.05,
      turbulence: 0.1,
      
      lifetime: 1,
      lifetimeVariation: 0.3,
      
      startColor: new THREE.Color('#00ffff'),
      endColor: new THREE.Color('#ff00ff'),
      colorCurve: 'ease',
      
      startOpacity: 1,
      endOpacity: 0,
      opacityCurve: 'ease',
      
      startScale: 1,
      endScale: 0,
      scaleCurve: 'ease',
      
      blending: THREE.AdditiveBlending,
    });
    
    this.scene.add(cursorParticles.getMesh());
    this.emitters.set('cursor', cursorParticles);
    
    return cursorParticles;
  }
  
  updateCursorPosition() {
    const cursorEmitter = this.emitters.get('cursor');
    if (!cursorEmitter) return;
    
    // Converter mouse 2D para posição 3D
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // Criar um plano invisível na frente da câmera
    const distance = 10;
    const planeNormal = new THREE.Vector3();
    this.camera.getWorldDirection(planeNormal);
    
    const planePoint = this.camera.position.clone();
    planePoint.add(planeNormal.multiplyScalar(distance));
    
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(
      planeNormal,
      planePoint
    );
    
    const intersectPoint = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(plane, intersectPoint);
    
    if (intersectPoint) {
      cursorEmitter.setPosition(intersectPoint.x, intersectPoint.y, intersectPoint.z);
    }
  }
  
  // ========================================
  // EXEMPLO 5: Click Effect
  // ========================================
  
  createClickBurst(position) {
    const burst = ParticlePresets.successBurst({
      position: position,
    });
    
    this.scene.add(burst.getMesh());
    
    // Remover após 3 segundos
    setTimeout(() => {
      this.scene.remove(burst.getMesh());
      burst.dispose();
    }, 3000);
    
    return burst;
  }
  
  // ========================================
  // EXEMPLO 6: Sistema de Partículas com Scroll
  // ========================================
  
  createScrollEffect() {
    const scrollParticles = new ParticleSystem({
      count: 3000,
      size: 3,
      color: '#ffffff',
      opacity: 0.6,
      
      spawnRadius: 15,
      spawnShape: 'sphere',
      
      velocityFactor: 0.05,
      gravity: new THREE.Vector3(0, 0, 0),
      turbulence: 0.3,
      
      lifetime: 8,
      respawn: true,
      
      mouseInfluence: 0.5,
      
      colorVariation: false,
      sizeVariation: 0.7,
    });
    
    this.scene.add(scrollParticles.getMesh());
    this.systems.set('scroll', scrollParticles);
    
    return scrollParticles;
  }
  
  // ========================================
  // EXEMPLO 7: Animação de Transição de Seção
  // ========================================
  
  createSectionTransition(fromY, toY, duration = 2) {
    const transitionParticles = new ParticleEmitter({
      emissionRate: 200,
      maxParticles: 1000,
      
      position: new THREE.Vector3(0, fromY, 0),
      emitterShape: 'box',
      emitterSize: 20,
      
      particleSize: 0.1,
      
      velocityDirection: new THREE.Vector3(0, toY - fromY, 0).normalize(),
      velocityMagnitude: Math.abs(toY - fromY) / duration,
      velocityVariation: 0.2,
      velocitySpread: 0.15,
      
      gravity: new THREE.Vector3(0, 0, 0),
      drag: 0.01,
      
      lifetime: duration,
      
      startColor: new THREE.Color('#ffffff'),
      endColor: new THREE.Color('#00aaff'),
      
      startOpacity: 0,
      endOpacity: 0.8,
      opacityCurve: 'smooth',
      
      startScale: 0,
      endScale: 1,
      scaleCurve: 'smooth',
      
      blending: THREE.AdditiveBlending,
    });
    
    this.scene.add(transitionParticles.getMesh());
    
    // Auto-remover após animação
    setTimeout(() => {
      transitionParticles.stop();
      setTimeout(() => {
        this.scene.remove(transitionParticles.getMesh());
        transitionParticles.dispose();
      }, duration * 1000);
    }, duration * 1000);
    
    return transitionParticles;
  }
  
  // ========================================
  // EXEMPLO 8: Logo Reveal com Partículas
  // ========================================
  
  createLogoReveal(logoPosition, logoSize) {
    // Partículas convergindo para formar o logo
    const reveal = new ParticleEmitter({
      emissionRate: 0,
      maxParticles: 500,
      burst: true,
      burstCount: 500,
      
      position: logoPosition.clone(),
      emitterShape: 'sphere',
      emitterSize: logoSize * 2,
      
      particleSize: 0.08,
      
      // Velocidade inicial para fora
      velocityDirection: new THREE.Vector3(0, 0, 0),
      velocityMagnitude: 2,
      velocityVariation: 0.5,
      velocitySpread: 1,
      
      // Depois convergem
      gravity: logoPosition.clone().multiplyScalar(-0.5),
      drag: 0.02,
      
      lifetime: 3,
      
      startColor: new THREE.Color('#d4af37'),
      endColor: new THREE.Color('#ffffff'),
      
      startOpacity: 0,
      endOpacity: 1,
      opacityCurve: 'smooth',
      
      startScale: 0,
      endScale: 1,
      scaleCurve: 'smooth',
      
      blending: THREE.AdditiveBlending,
    });
    
    this.scene.add(reveal.getMesh());
    this.emitters.set('logo-reveal', reveal);
    
    return reveal;
  }
  
  // ========================================
  // EXEMPLO 9: Financial Data Visualization
  // ========================================
  
  createDataFlow(startPoint, endPoint, dataValue) {
    // Cor baseada no valor (verde = positivo, vermelho = negativo)
    const color = dataValue >= 0 ? '#00ff00' : '#ff0000';
    const intensity = Math.min(Math.abs(dataValue) / 100, 1);
    
    const direction = endPoint.clone().sub(startPoint).normalize();
    const distance = startPoint.distanceTo(endPoint);
    
    const flow = new ParticleEmitter({
      emissionRate: 50 * intensity,
      maxParticles: 500,
      
      position: startPoint.clone(),
      emitterShape: 'point',
      
      particleSize: 0.05,
      
      velocityDirection: direction,
      velocityMagnitude: distance / 2,
      velocityVariation: 0.1,
      velocitySpread: 0.05,
      
      gravity: new THREE.Vector3(0, 0, 0),
      drag: 0.01,
      
      lifetime: 2,
      
      startColor: new THREE.Color(color),
      endColor: new THREE.Color(color).multiplyScalar(0.5),
      
      startOpacity: intensity,
      endOpacity: 0,
      
      startScale: 1,
      endScale: 0.5,
      
      blending: THREE.AdditiveBlending,
    });
    
    this.scene.add(flow.getMesh());
    
    return flow;
  }
  
  // ========================================
  // UPDATE LOOP
  // ========================================
  
  update(deltaTime) {
    // Atualizar cursor effect
    this.updateCursorPosition();
    
    // Atualizar todos os sistemas
    this.systems.forEach(system => {
      system.update(deltaTime);
    });
    
    // Atualizar todos os emitters
    this.emitters.forEach(emitter => {
      emitter.update(deltaTime);
    });
  }
  
  // ========================================
  // CLEANUP
  // ========================================
  
  dispose() {
    this.systems.forEach(system => {
      this.scene.remove(system.getMesh());
      system.dispose();
    });
    
    this.emitters.forEach(emitter => {
      this.scene.remove(emitter.getMesh());
      emitter.dispose();
    });
    
    this.systems.clear();
    this.emitters.clear();
  }
}

// ========================================
// EXEMPLO DE SETUP COMPLETO
// ========================================

export function setupParticleEffects(scene, camera, renderer) {
  const manager = new ParticleEffectsManager(scene, camera, renderer);
  
  // Setup ambiente premium
  manager.createPremiumAmbient();
  manager.createHeroSparkles();
  manager.createCursorEffect();
  
  // Animation loop
  let lastTime = 0;
  function animate(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    
    manager.update(deltaTime);
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  
  animate(0);
  
  return manager;
}

export default ParticleEffectsManager;

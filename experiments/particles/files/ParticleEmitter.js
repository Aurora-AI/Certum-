import * as THREE from 'three';

/**
 * ============================================
 * PARTICLE EMITTER - ADVANCED EMISSION SYSTEM
 * ============================================
 * Sistema de emissão contínua com controle fino de comportamento
 */

export class ParticleEmitter {
  constructor(options = {}) {
    this.options = {
      // Emissão
      emissionRate: options.emissionRate || 100, // partículas por segundo
      maxParticles: options.maxParticles || 10000,
      burst: options.burst || false,
      burstCount: options.burstCount || 100,
      
      // Posição do emissor
      position: options.position || new THREE.Vector3(0, 0, 0),
      emitterShape: options.emitterShape || 'point', // 'point', 'sphere', 'box', 'cone'
      emitterSize: options.emitterSize || 1,
      
      // Partículas
      particleSize: options.particleSize || 0.1,
      particleSizeVariation: options.particleSizeVariation || 0.5,
      
      // Velocidade
      velocityDirection: options.velocityDirection || new THREE.Vector3(0, 1, 0),
      velocityMagnitude: options.velocityMagnitude || 1,
      velocityVariation: options.velocityVariation || 0.3,
      velocitySpread: options.velocitySpread || 0.2, // cone spread
      
      // Física
      gravity: options.gravity || new THREE.Vector3(0, -0.5, 0),
      drag: options.drag || 0.01,
      turbulence: options.turbulence || 0.1,
      
      // Lifetime
      lifetime: options.lifetime || 3,
      lifetimeVariation: options.lifetimeVariation || 0.5,
      
      // Cor
      startColor: options.startColor || new THREE.Color(1, 1, 1),
      endColor: options.endColor || new THREE.Color(1, 1, 1),
      colorCurve: options.colorCurve || 'linear', // 'linear', 'ease', 'smooth'
      
      // Opacidade
      startOpacity: options.startOpacity || 1,
      endOpacity: options.endOpacity || 0,
      opacityCurve: options.opacityCurve || 'linear',
      
      // Escala
      startScale: options.startScale || 1,
      endScale: options.endScale || 1,
      scaleCurve: options.scaleCurve || 'linear',
      
      // Rotação
      rotation: options.rotation || false,
      rotationSpeed: options.rotationSpeed || 1,
      
      // Blend mode
      blending: options.blending || THREE.AdditiveBlending,
      
      // Textura
      texture: options.texture || null,
    };
    
    this.particles = [];
    this.particlePool = [];
    this.time = 0;
    this.emissionAccumulator = 0;
    this.isActive = true;
    
    this.geometry = null;
    this.material = null;
    this.mesh = null;
    
    this.init();
  }
  
  init() {
    this.createMaterial();
    this.createGeometry();
    this.createMesh();
    
    // Pré-alocar pool de partículas
    for (let i = 0; i < this.options.maxParticles; i++) {
      this.particlePool.push(this.createParticle());
    }
  }
  
  createParticle() {
    return {
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      acceleration: new THREE.Vector3(),
      size: 0,
      rotation: 0,
      lifetime: 0,
      maxLifetime: 0,
      age: 0,
      alive: false,
    };
  }
  
  createMaterial() {
    const vertexShader = `
      attribute float size;
      attribute vec3 customColor;
      attribute float opacity;
      
      varying vec3 vColor;
      varying float vOpacity;
      
      void main() {
        vColor = customColor;
        vOpacity = opacity;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
    
    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform bool uUseTexture;
      
      varying vec3 vColor;
      varying float vOpacity;
      
      void main() {
        vec2 uv = gl_PointCoord;
        
        if (uUseTexture) {
          vec4 texColor = texture2D(uTexture, uv);
          gl_FragColor = vec4(vColor, vOpacity) * texColor;
        } else {
          vec2 center = uv - 0.5;
          float dist = length(center);
          float circle = 1.0 - smoothstep(0.0, 0.5, dist);
          
          gl_FragColor = vec4(vColor, circle * vOpacity);
        }
      }
    `;
    
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: this.options.texture },
        uUseTexture: { value: this.options.texture !== null },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: this.options.blending,
    });
  }
  
  createGeometry() {
    this.geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(this.options.maxParticles * 3);
    const sizes = new Float32Array(this.options.maxParticles);
    const colors = new Float32Array(this.options.maxParticles * 3);
    const opacities = new Float32Array(this.options.maxParticles);
    
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    
    this.geometry.setDrawRange(0, 0);
  }
  
  createMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);
  }
  
  emitParticle() {
    // Pegar partícula do pool
    let particle = this.particlePool.find(p => !p.alive);
    if (!particle) return; // Pool esgotado
    
    particle.alive = true;
    particle.age = 0;
    
    // Posição de spawn
    particle.position.copy(this.getEmissionPosition());
    
    // Velocidade
    particle.velocity.copy(this.getEmissionVelocity());
    
    // Aceleração (gravidade)
    particle.acceleration.copy(this.options.gravity);
    
    // Lifetime
    const lifetimeVar = 1 + (Math.random() - 0.5) * this.options.lifetimeVariation;
    particle.maxLifetime = this.options.lifetime * lifetimeVar;
    
    // Tamanho
    const sizeVar = 1 + (Math.random() - 0.5) * this.options.particleSizeVariation;
    particle.size = this.options.particleSize * sizeVar;
    
    // Rotação
    if (this.options.rotation) {
      particle.rotation = Math.random() * Math.PI * 2;
    }
    
    this.particles.push(particle);
  }
  
  getEmissionPosition() {
    const pos = new THREE.Vector3();
    const { emitterShape, emitterSize, position } = this.options;
    
    switch (emitterShape) {
      case 'point':
        pos.copy(position);
        break;
        
      case 'sphere':
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.random() * emitterSize;
        pos.x = position.x + r * Math.sin(phi) * Math.cos(theta);
        pos.y = position.y + r * Math.sin(phi) * Math.sin(theta);
        pos.z = position.z + r * Math.cos(phi);
        break;
        
      case 'box':
        pos.x = position.x + (Math.random() - 0.5) * emitterSize;
        pos.y = position.y + (Math.random() - 0.5) * emitterSize;
        pos.z = position.z + (Math.random() - 0.5) * emitterSize;
        break;
        
      case 'cone':
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * emitterSize;
        pos.x = position.x + Math.cos(angle) * radius;
        pos.y = position.y;
        pos.z = position.z + Math.sin(angle) * radius;
        break;
    }
    
    return pos;
  }
  
  getEmissionVelocity() {
    const vel = new THREE.Vector3();
    const { velocityDirection, velocityMagnitude, velocityVariation, velocitySpread } = this.options;
    
    // Direção base
    vel.copy(velocityDirection);
    
    // Spread (cone)
    const spreadAngle = Math.random() * velocitySpread * Math.PI;
    const spreadRotation = Math.random() * Math.PI * 2;
    
    const perpendicular = new THREE.Vector3();
    if (Math.abs(vel.y) < 0.99) {
      perpendicular.set(0, 1, 0);
    } else {
      perpendicular.set(1, 0, 0);
    }
    perpendicular.cross(vel).normalize();
    
    vel.applyAxisAngle(perpendicular, spreadAngle);
    vel.applyAxisAngle(velocityDirection, spreadRotation);
    
    // Magnitude com variação
    const magVar = 1 + (Math.random() - 0.5) * velocityVariation;
    vel.multiplyScalar(velocityMagnitude * magVar);
    
    return vel;
  }
  
  update(deltaTime) {
    if (!this.isActive) return;
    
    this.time += deltaTime;
    
    // Emitir novas partículas
    if (this.options.burst) {
      // Modo burst - emitir todas de uma vez
      if (this.particles.length === 0) {
        for (let i = 0; i < this.options.burstCount; i++) {
          this.emitParticle();
        }
      }
    } else {
      // Modo contínuo
      this.emissionAccumulator += this.options.emissionRate * deltaTime;
      
      while (this.emissionAccumulator >= 1 && this.particles.length < this.options.maxParticles) {
        this.emitParticle();
        this.emissionAccumulator -= 1;
      }
    }
    
    // Atualizar partículas existentes
    const positions = this.geometry.attributes.position.array;
    const sizes = this.geometry.attributes.size.array;
    const colors = this.geometry.attributes.customColor.array;
    const opacities = this.geometry.attributes.opacity.array;
    
    let particleIndex = 0;
    
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      
      particle.age += deltaTime;
      const lifeProgress = particle.age / particle.maxLifetime;
      
      // Remover se morreu
      if (lifeProgress >= 1) {
        particle.alive = false;
        this.particles.splice(i, 1);
        continue;
      }
      
      // Física
      particle.velocity.add(particle.acceleration.clone().multiplyScalar(deltaTime));
      particle.velocity.multiplyScalar(1 - this.options.drag);
      
      // Turbulência
      if (this.options.turbulence > 0) {
        const turbX = (Math.random() - 0.5) * this.options.turbulence;
        const turbY = (Math.random() - 0.5) * this.options.turbulence;
        const turbZ = (Math.random() - 0.5) * this.options.turbulence;
        particle.velocity.add(new THREE.Vector3(turbX, turbY, turbZ));
      }
      
      particle.position.add(particle.velocity.clone().multiplyScalar(deltaTime));
      
      // Rotação
      if (this.options.rotation) {
        particle.rotation += this.options.rotationSpeed * deltaTime;
      }
      
      // Atualizar atributos de geometria
      const i3 = particleIndex * 3;
      
      positions[i3] = particle.position.x;
      positions[i3 + 1] = particle.position.y;
      positions[i3 + 2] = particle.position.z;
      
      // Tamanho com curva
      const scale = this.interpolate(
        this.options.startScale,
        this.options.endScale,
        lifeProgress,
        this.options.scaleCurve
      );
      sizes[particleIndex] = particle.size * scale;
      
      // Cor com curva
      const color = new THREE.Color().lerpColors(
        this.options.startColor,
        this.options.endColor,
        this.applyCurve(lifeProgress, this.options.colorCurve)
      );
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Opacidade com curva
      opacities[particleIndex] = this.interpolate(
        this.options.startOpacity,
        this.options.endOpacity,
        lifeProgress,
        this.options.opacityCurve
      );
      
      particleIndex++;
    }
    
    // Atualizar draw range
    this.geometry.setDrawRange(0, particleIndex);
    
    // Marcar para update
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.attributes.customColor.needsUpdate = true;
    this.geometry.attributes.opacity.needsUpdate = true;
  }
  
  interpolate(start, end, progress, curve) {
    const t = this.applyCurve(progress, curve);
    return start + (end - start) * t;
  }
  
  applyCurve(t, curve) {
    switch (curve) {
      case 'linear':
        return t;
      case 'ease':
        return t * t * (3 - 2 * t); // smoothstep
      case 'smooth':
        return t * t * t * (t * (t * 6 - 15) + 10); // smootherstep
      default:
        return t;
    }
  }
  
  start() {
    this.isActive = true;
  }
  
  stop() {
    this.isActive = false;
  }
  
  clear() {
    this.particles.forEach(p => p.alive = false);
    this.particles = [];
    this.geometry.setDrawRange(0, 0);
  }
  
  setPosition(x, y, z) {
    this.options.position.set(x, y, z);
  }
  
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
  
  getMesh() {
    return this.mesh;
  }
}

export default ParticleEmitter;

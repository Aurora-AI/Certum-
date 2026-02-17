import * as THREE from 'three';

/**
 * ============================================
 * PARTICLE SYSTEM - PREMIUM WEBGL EFFECTS
 * ============================================
 * Sistema avançado de partículas com física, turbulência e interação
 */

export class ParticleSystem {
  constructor(options = {}) {
    this.options = {
      count: options.count || 5000,
      size: options.size || 2,
      color: options.color || '#ffffff',
      opacity: options.opacity || 0.8,
      
      // Área de spawn
      spawnRadius: options.spawnRadius || 10,
      spawnShape: options.spawnShape || 'sphere', // 'sphere', 'box', 'plane'
      
      // Física
      velocityFactor: options.velocityFactor || 0.1,
      gravity: options.gravity || new THREE.Vector3(0, -0.01, 0),
      turbulence: options.turbulence || 0.5,
      
      // Lifetime
      lifetime: options.lifetime || 5,
      respawn: options.respawn !== undefined ? options.respawn : true,
      
      // Interação
      mouseInfluence: options.mouseInfluence || 1.0,
      mouseRadius: options.mouseRadius || 5,
      
      // Visual
      useTexture: options.useTexture || false,
      texture: options.texture || null,
      colorVariation: options.colorVariation || false,
      sizeVariation: options.sizeVariation || 0.5,
      
      // Performance
      frustumCulled: options.frustumCulled !== undefined ? options.frustumCulled : true,
    };
    
    this.particles = null;
    this.geometry = null;
    this.material = null;
    this.time = 0;
    this.mouse = new THREE.Vector3();
    
    this.init();
  }
  
  init() {
    this.createGeometry();
    this.createMaterial();
    this.createMesh();
  }
  
  createGeometry() {
    const { count } = this.options;
    
    this.geometry = new THREE.BufferGeometry();
    
    // Arrays para atributos
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const maxLifetimes = new Float32Array(count);
    
    // Popular com valores aleatórios
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Posição baseada no spawn shape
      const pos = this.getSpawnPosition();
      positions[i3] = pos.x;
      positions[i3 + 1] = pos.y;
      positions[i3 + 2] = pos.z;
      
      // Velocidade aleatória
      const vel = this.getRandomVelocity();
      velocities[i3] = vel.x;
      velocities[i3 + 1] = vel.y;
      velocities[i3 + 2] = vel.z;
      
      // Tamanho com variação
      const sizeVar = 1 + (Math.random() - 0.5) * this.options.sizeVariation;
      sizes[i] = this.options.size * sizeVar;
      
      // Alpha inicial
      alphas[i] = this.options.opacity * (0.5 + Math.random() * 0.5);
      
      // Cor
      const color = this.getParticleColor();
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Lifetime
      const lifetime = this.options.lifetime * (0.5 + Math.random() * 0.5);
      lifetimes[i] = Math.random() * lifetime; // Start at random point in lifetime
      maxLifetimes[i] = lifetime;
    }
    
    // Adicionar atributos à geometria
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('lifetime', new THREE.BufferAttribute(lifetimes, 1));
    this.geometry.setAttribute('maxLifetime', new THREE.BufferAttribute(maxLifetimes, 1));
  }
  
  getSpawnPosition() {
    const { spawnRadius, spawnShape } = this.options;
    const pos = new THREE.Vector3();
    
    switch (spawnShape) {
      case 'sphere':
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.random() * spawnRadius;
        pos.x = r * Math.sin(phi) * Math.cos(theta);
        pos.y = r * Math.sin(phi) * Math.sin(theta);
        pos.z = r * Math.cos(phi);
        break;
        
      case 'box':
        pos.x = (Math.random() - 0.5) * spawnRadius * 2;
        pos.y = (Math.random() - 0.5) * spawnRadius * 2;
        pos.z = (Math.random() - 0.5) * spawnRadius * 2;
        break;
        
      case 'plane':
        pos.x = (Math.random() - 0.5) * spawnRadius * 2;
        pos.y = 0;
        pos.z = (Math.random() - 0.5) * spawnRadius * 2;
        break;
    }
    
    return pos;
  }
  
  getRandomVelocity() {
    const { velocityFactor } = this.options;
    return new THREE.Vector3(
      (Math.random() - 0.5) * velocityFactor,
      (Math.random() - 0.5) * velocityFactor,
      (Math.random() - 0.5) * velocityFactor
    );
  }
  
  getParticleColor() {
    if (this.options.colorVariation) {
      // Variação de cor
      const hue = Math.random();
      const color = new THREE.Color().setHSL(hue, 0.7, 0.6);
      return color;
    } else {
      // Cor única
      const color = new THREE.Color(this.options.color);
      return color;
    }
  }
  
  createMaterial() {
    const vertexShader = `
      attribute vec3 velocity;
      attribute float size;
      attribute float alpha;
      attribute vec3 color;
      attribute float lifetime;
      attribute float maxLifetime;
      
      uniform float uTime;
      uniform float uPixelRatio;
      uniform vec3 uMousePosition;
      uniform float uMouseInfluence;
      
      varying vec3 vColor;
      varying float vAlpha;
      varying float vLifeProgress;
      
      void main() {
        vLifeProgress = lifetime / maxLifetime;
        
        // Posição básica
        vec3 pos = position + velocity * uTime;
        
        // Influência do mouse
        vec3 toMouse = uMousePosition - position;
        float mouseDist = length(toMouse);
        vec3 mouseForce = normalize(toMouse) * (uMouseInfluence / (mouseDist + 1.0));
        pos += mouseForce;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Tamanho com fade
        float sizeMultiplier = 1.0 - pow(vLifeProgress, 2.0);
        float distanceScale = 300.0 / -mvPosition.z;
        gl_PointSize = size * sizeMultiplier * distanceScale * uPixelRatio;
        
        vColor = color;
        vAlpha = alpha * (1.0 - vLifeProgress);
      }
    `;
    
    const fragmentShader = `
      varying vec3 vColor;
      varying float vAlpha;
      varying float vLifeProgress;
      
      uniform sampler2D uTexture;
      uniform bool uUseTexture;
      
      void main() {
        vec2 uv = gl_PointCoord;
        
        if (uUseTexture) {
          vec4 texColor = texture2D(uTexture, uv);
          gl_FragColor = vec4(vColor, vAlpha) * texColor;
        } else {
          vec2 center = uv - 0.5;
          float dist = length(center);
          
          float circle = 1.0 - smoothstep(0.0, 0.5, dist);
          float glow = exp(-dist * 3.0);
          float core = exp(-dist * 8.0);
          
          float alpha = (circle * 0.5 + glow * 0.3 + core * 0.2) * vAlpha;
          alpha *= smoothstep(1.0, 0.8, vLifeProgress);
          
          gl_FragColor = vec4(vColor, alpha);
        }
      }
    `;
    
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uMousePosition: { value: new THREE.Vector3() },
        uMouseInfluence: { value: this.options.mouseInfluence },
        uTexture: { value: this.options.texture },
        uUseTexture: { value: this.options.useTexture },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
  
  createMesh() {
    this.particles = new THREE.Points(this.geometry, this.material);
    this.particles.frustumCulled = this.options.frustumCulled;
  }
  
  update(deltaTime) {
    this.time += deltaTime;
    this.material.uniforms.uTime.value = this.time;
    
    // Atualizar lifetimes
    const lifetimes = this.geometry.attributes.lifetime.array;
    const maxLifetimes = this.geometry.attributes.maxLifetime.array;
    const positions = this.geometry.attributes.position.array;
    const velocities = this.geometry.attributes.velocity.array;
    
    for (let i = 0; i < this.options.count; i++) {
      lifetimes[i] += deltaTime;
      
      // Respawn partícula se necessário
      if (this.options.respawn && lifetimes[i] >= maxLifetimes[i]) {
        lifetimes[i] = 0;
        
        // Nova posição
        const pos = this.getSpawnPosition();
        const i3 = i * 3;
        positions[i3] = pos.x;
        positions[i3 + 1] = pos.y;
        positions[i3 + 2] = pos.z;
        
        // Nova velocidade
        const vel = this.getRandomVelocity();
        velocities[i3] = vel.x;
        velocities[i3 + 1] = vel.y;
        velocities[i3 + 2] = vel.z;
      }
    }
    
    this.geometry.attributes.lifetime.needsUpdate = true;
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.velocity.needsUpdate = true;
  }
  
  setMousePosition(x, y, z) {
    this.mouse.set(x, y, z);
    this.material.uniforms.uMousePosition.value.copy(this.mouse);
  }
  
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
  
  getMesh() {
    return this.particles;
  }
}

export default ParticleSystem;

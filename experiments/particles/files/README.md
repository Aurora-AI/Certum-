# 🌟 Premium Particle Effects System

Sistema completo de partículas WebGL para criar efeitos visuais premium em websites de alto nível.

## 📦 Arquivos do Sistema

```
particle-effects/
├── particle-shaders.glsl          # Shaders GLSL (vertex + fragment)
├── ParticleSystem.js              # Sistema base de partículas
├── ParticleEmitter.js             # Emissor avançado com física
├── ParticlePresets.js             # Biblioteca de efeitos prontos
└── ParticleEffectsManager.js      # Manager + exemplos de uso
```

## 🚀 Quick Start

### Instalação Básica

```javascript
import * as THREE from 'three';
import { ParticlePresets } from './ParticlePresets';

// Setup básico Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Adicionar efeito de floating dust
const dust = ParticlePresets.floatingDust({
  emissionRate: 50,
  color: '#ffffff'
});

scene.add(dust.getMesh());

// Animation loop
function animate(time) {
  requestAnimationFrame(animate);
  
  dust.update(time / 1000);
  
  renderer.render(scene, camera);
}

animate(0);
```

## 🎨 Presets Disponíveis

### Ambient Effects

#### **Floating Dust**
```javascript
const dust = ParticlePresets.floatingDust({
  emissionRate: 50,
  color: '#ffffff',
  position: new THREE.Vector3(0, 0, 0)
});
```
*Partículas sutis flutuando - perfeito para background ambiente premium*

#### **Golden Sparkles**
```javascript
const sparkles = ParticlePresets.goldenSparkles({
  emissionRate: 30,
  position: new THREE.Vector3(0, 0, 0)
});
```
*Brilhos dourados - ideal para hero sections e CTAs*

#### **Smoke Rising**
```javascript
const smoke = ParticlePresets.smokeRising({
  emissionRate: 20,
  color: '#888888',
  position: new THREE.Vector3(0, 0, 0)
});
```
*Fumaça subindo suavemente - atmosférico*

### Energy Effects

#### **Energy Flow**
```javascript
const energy = ParticlePresets.energyFlow({
  emissionRate: 100,
  direction: new THREE.Vector3(0, 1, 0),
  color: '#00ffff',
  endColor: '#0088ff'
});
```
*Fluxo de energia em direção específica - excelente para visualizações de dados*

#### **Electric Sparks**
```javascript
const sparks = ParticlePresets.electricSparks({
  position: new THREE.Vector3(0, 0, 0)
});
```
*Faíscas elétricas em burst - impacto visual instantâneo*

### Magical Effects

#### **Magic Aura**
```javascript
const aura = ParticlePresets.magicAura({
  emissionRate: 60,
  color: '#8800ff',
  endColor: '#ff00ff'
});
```
*Aura mágica rotatória - perfeito para elementos premium*

#### **Fairy Dust**
```javascript
const fairy = ParticlePresets.fairyDust({
  emissionRate: 80,
  position: new THREE.Vector3(0, 0, 0)
});
```
*Poeira de fada colorida - delicado e elegante*

### Weather Effects

#### **Rain**
```javascript
const rain = ParticlePresets.rain({
  emissionRate: 500,
  position: new THREE.Vector3(0, 10, 0)
});
```
*Chuva realista*

#### **Snow**
```javascript
const snow = ParticlePresets.snow({
  emissionRate: 200,
  position: new THREE.Vector3(0, 10, 0)
});
```
*Neve suave caindo*

### Financial/Premium Effects

#### **Currency Flow**
```javascript
const currency = ParticlePresets.currencyFlow({
  emissionRate: 40,
  position: new THREE.Vector3(0, 0, 0)
});
```
*Fluxo de moedas douradas - perfeito para sites financeiros*

#### **Success Burst**
```javascript
const burst = ParticlePresets.successBurst({
  position: new THREE.Vector3(0, 0, 0)
});
```
*Explosão de sucesso - feedback visual para ações importantes*

## 🔧 Sistema Customizado

### ParticleSystem

Para controle total sobre um sistema de partículas:

```javascript
import { ParticleSystem } from './ParticleSystem';

const system = new ParticleSystem({
  // Quantidade
  count: 5000,
  size: 2,
  color: '#ffffff',
  opacity: 0.8,
  
  // Spawn
  spawnRadius: 10,
  spawnShape: 'sphere', // 'sphere', 'box', 'plane'
  
  // Física
  velocityFactor: 0.1,
  gravity: new THREE.Vector3(0, -0.01, 0),
  turbulence: 0.5,
  
  // Lifetime
  lifetime: 5,
  respawn: true,
  
  // Interação
  mouseInfluence: 1.0,
  mouseRadius: 5,
  
  // Visual
  useTexture: false,
  texture: null,
  colorVariation: false,
  sizeVariation: 0.5
});

scene.add(system.getMesh());

// Update
function animate(deltaTime) {
  system.update(deltaTime);
}

// Interação com mouse
system.setMousePosition(mouseX, mouseY, mouseZ);
```

### ParticleEmitter

Para emissão controlada com física avançada:

```javascript
import { ParticleEmitter } from './ParticleEmitter';

const emitter = new ParticleEmitter({
  // Emissão
  emissionRate: 100,
  maxParticles: 10000,
  burst: false,
  burstCount: 100,
  
  // Posição
  position: new THREE.Vector3(0, 0, 0),
  emitterShape: 'point', // 'point', 'sphere', 'box', 'cone'
  emitterSize: 1,
  
  // Partículas
  particleSize: 0.1,
  particleSizeVariation: 0.5,
  
  // Velocidade
  velocityDirection: new THREE.Vector3(0, 1, 0),
  velocityMagnitude: 1,
  velocityVariation: 0.3,
  velocitySpread: 0.2,
  
  // Física
  gravity: new THREE.Vector3(0, -0.5, 0),
  drag: 0.01,
  turbulence: 0.1,
  
  // Lifetime
  lifetime: 3,
  lifetimeVariation: 0.5,
  
  // Cor (gradiente durante lifetime)
  startColor: new THREE.Color(1, 1, 1),
  endColor: new THREE.Color(1, 1, 1),
  colorCurve: 'linear', // 'linear', 'ease', 'smooth'
  
  // Opacidade
  startOpacity: 1,
  endOpacity: 0,
  opacityCurve: 'linear',
  
  // Escala
  startScale: 1,
  endScale: 1,
  scaleCurve: 'linear',
  
  // Rotação
  rotation: false,
  rotationSpeed: 1,
  
  // Blend
  blending: THREE.AdditiveBlending,
  
  // Textura
  texture: null
});

scene.add(emitter.getMesh());

// Controle
emitter.start();
emitter.stop();
emitter.clear();

emitter.setPosition(x, y, z);
```

## 💡 Casos de Uso - Certum Private

### 1. Hero Section Premium

```javascript
// Background ambient
const dust = ParticlePresets.floatingDust({
  emissionRate: 30,
  color: '#ffffff'
});

// Accent sparkles
const sparkles = ParticlePresets.goldenSparkles({
  emissionRate: 20,
  position: new THREE.Vector3(0, 2, 0)
});

scene.add(dust.getMesh());
scene.add(sparkles.getMesh());
```

### 2. Cursor Interativo

```javascript
const cursorParticles = new ParticleEmitter({
  emissionRate: 100,
  maxParticles: 2000,
  
  position: new THREE.Vector3(0, 0, 0),
  emitterShape: 'point',
  
  particleSize: 0.1,
  
  velocityMagnitude: 0.5,
  velocitySpread: 1,
  
  lifetime: 1,
  
  startColor: new THREE.Color('#00ffff'),
  endColor: new THREE.Color('#ff00ff'),
  
  startOpacity: 1,
  endOpacity: 0,
  
  blending: THREE.AdditiveBlending
});

// Atualizar posição baseado no mouse
function onMouseMove(event) {
  const mouse = {
    x: (event.clientX / window.innerWidth) * 2 - 1,
    y: -(event.clientY / window.innerHeight) * 2 + 1
  };
  
  // Converter para 3D
  raycaster.setFromCamera(mouse, camera);
  const intersectPoint = raycaster.ray.at(10);
  
  cursorParticles.setPosition(
    intersectPoint.x,
    intersectPoint.y,
    intersectPoint.z
  );
}
```

### 3. Data Visualization (Financial)

```javascript
function visualizeTransaction(from, to, value) {
  const direction = to.clone().sub(from).normalize();
  const distance = from.distanceTo(to);
  
  const color = value >= 0 ? '#00ff00' : '#ff0000';
  
  const flow = new ParticleEmitter({
    emissionRate: 50,
    position: from,
    
    velocityDirection: direction,
    velocityMagnitude: distance / 2,
    
    lifetime: 2,
    
    startColor: new THREE.Color(color),
    endColor: new THREE.Color(color).multiplyScalar(0.5),
    
    blending: THREE.AdditiveBlending
  });
  
  scene.add(flow.getMesh());
  
  return flow;
}
```

### 4. Section Transition

```javascript
function transitionToSection(targetY) {
  const transition = new ParticleEmitter({
    emissionRate: 200,
    maxParticles: 1000,
    
    position: new THREE.Vector3(0, camera.position.y, 0),
    emitterShape: 'box',
    emitterSize: 20,
    
    velocityDirection: new THREE.Vector3(0, targetY - camera.position.y, 0).normalize(),
    velocityMagnitude: 5,
    
    lifetime: 2,
    
    startColor: new THREE.Color('#ffffff'),
    endColor: new THREE.Color('#00aaff'),
    
    startOpacity: 0,
    endOpacity: 0.8,
    opacityCurve: 'smooth',
    
    blending: THREE.AdditiveBlending
  });
  
  scene.add(transition.getMesh());
  
  // Auto-cleanup
  setTimeout(() => {
    transition.stop();
    setTimeout(() => {
      scene.remove(transition.getMesh());
      transition.dispose();
    }, 2000);
  }, 2000);
}
```

### 5. Click Feedback

```javascript
function createClickEffect(position) {
  const burst = ParticlePresets.successBurst({ position });
  
  scene.add(burst.getMesh());
  
  setTimeout(() => {
    scene.remove(burst.getMesh());
    burst.dispose();
  }, 3000);
}

// Event listener
canvas.addEventListener('click', (event) => {
  const mouse = {
    x: (event.clientX / window.innerWidth) * 2 - 1,
    y: -(event.clientY / window.innerHeight) * 2 + 1
  };
  
  raycaster.setFromCamera(mouse, camera);
  const intersectPoint = raycaster.ray.at(10);
  
  createClickEffect(intersectPoint);
});
```

## 🎯 Performance Tips

### 1. Limitar Partículas Ativas
```javascript
const emitter = new ParticleEmitter({
  maxParticles: 2000, // Não exceder 5000 em dispositivos mobile
  emissionRate: 50
});
```

### 2. Usar Frustum Culling
```javascript
const system = new ParticleSystem({
  frustumCulled: true // Remove partículas fora da câmera
});
```

### 3. Blending Mode Apropriado
```javascript
// Additive (mais impacto visual, mais pesado)
blending: THREE.AdditiveBlending

// Normal (mais leve)
blending: THREE.NormalBlending
```

### 4. Ajustar Pixel Ratio
```javascript
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limitar a 2x
```

### 5. Cleanup
```javascript
// Sempre fazer dispose quando remover
function removeEffect(emitter) {
  scene.remove(emitter.getMesh());
  emitter.dispose();
}
```

## 🔮 Recursos Avançados

### Curvas de Animação

O sistema suporta 3 tipos de curvas para interpolar valores:

- **linear**: Transição linear simples
- **ease**: Smoothstep (suave aceleração/desaceleração)
- **smooth**: Smootherstep (ainda mais suave)

```javascript
const emitter = new ParticleEmitter({
  opacityCurve: 'smooth',  // Fade muito suave
  scaleCurve: 'ease',      // Crescimento suave
  colorCurve: 'linear'     // Cor linear
});
```

### Texturas Customizadas

```javascript
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('/path/to/particle.png');

const emitter = new ParticleEmitter({
  texture: particleTexture,
  // useTexture é automático quando texture é fornecida
});
```

### Emissor Shapes

Diferentes formatos de emissão:

```javascript
// Point - Emite de um ponto
emitterShape: 'point'

// Sphere - Emite de uma esfera
emitterShape: 'sphere',
emitterSize: 2

// Box - Emite de um cubo
emitterShape: 'box',
emitterSize: 3

// Cone - Emite de um cone (base circular)
emitterShape: 'cone',
emitterSize: 1
```

## 📊 Shaders Customizados

Os shaders estão em `particle-shaders.glsl` e podem ser modificados para efeitos especiais:

- **Simplex Noise**: Turbulência procedural
- **Mouse Influence**: Repulsão/atração baseada em mouse
- **Glow Effect**: Núcleo brilhante com halo
- **Lifetime Fade**: Fade suave baseado em vida

## 🎨 Paleta de Cores Premium

Cores sugeridas para sites financeiros:

```javascript
// Dourado
'#D4AF37', '#FFD700', '#FFA500'

// Azul Premium
'#0A1628', '#1E3A5F', '#00AAFF'

// Verde Sucesso
'#00FF88', '#00CC66'

// Vermelho Alerta
'#FF4444', '#CC0000'

// Branco/Cinza
'#FFFFFF', '#E8E8E8', '#888888'
```

## 📝 License

MIT - Use livremente no projeto Certum Private

---

**Desenvolvido para Certum Private**  
Sistema de partículas premium para experiências web de alto nível.

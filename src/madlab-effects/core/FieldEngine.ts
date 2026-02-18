import * as THREE from 'three';
import { performanceGovernor, AmplitudeCaps } from './governance';
import gsap from 'gsap';

// --- SHADERS (The Cognitive Texture) ---

const VERTEX_SHADER = `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float uTime;
    uniform float uScroll;
    uniform vec2 uCursor;
    uniform float uWellStrength; // Gravitational Well
    uniform float uPressure; // Atmospheric Pressure

    void main() {
        vUv = uv;
        vPos = position;
        
        // Structural Compression on Scroll + Pressure
        vec3 pos = position;
        pos.y *= 1.0 - (uScroll * 0.1) - (uPressure * 0.05); 

        // Gravitational Well (Pull towards cursor)
        float dist = distance(uv, uCursor);
        float pull = smoothstep(0.4, 0.0, dist) * uWellStrength * 0.2;
        pos.z += pull;

        // Cursor Influence (Subtle distortion)
        float influence = smoothstep(0.5, 0.0, dist) * 0.05 * (1.0 + uWellStrength);
        pos.z += influence * sin(uTime * 2.0);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const FRAGMENT_SHADER = `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float uTime;
    uniform vec3 uColorA; // Darker (Shadow)
    uniform vec3 uColorB; // Lighter (Light)
    uniform float uThinking; // Brain activity factor

    // Simplex Noise (Simplified for performance)
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    void main() {
        // Living Noise
        // Slow breathing + Micro-flow
        float noiseVal = snoise(vUv * 3.0 + uTime * 0.1);
        
        // Second layer for depth
        float noiseVal2 = snoise(vUv * 6.0 - uTime * 0.05);

        // Mix
        float mixedNoise = (noiseVal + noiseVal2 * 0.5) / 1.5;
        
        // Color mix based on noise
        vec3 color = mix(uColorA, uColorB, smoothstep(-0.2, 0.5, mixedNoise));

        // Soft vignetting/fading
        float vignet = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
        
        gl_FragColor = vec4(color, vignet * 0.8); // 0.8 opacity max
    }
`;

export class FieldEngine {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.PlaneGeometry;
    private material: THREE.ShaderMaterial;
    private mesh: THREE.Mesh;
    private animationId: number | null = null;
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
        
        // 1. SETUP
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true,
            powerPreference: 'high-performance' 
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
        container.appendChild(this.renderer.domElement);

        // 2. THE VOLUMETRIC PLANE
        this.geometry = new THREE.PlaneGeometry(16, 16, 64, 64); // High tessellation for vertex displacement
        
        this.material = new THREE.ShaderMaterial({
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            uniforms: {
                uTime: { value: 0 },
                uColorA: { value: new THREE.Color('#e0e0e0') }, 
                uColorB: { value: new THREE.Color('#ffffff') }, 
                uScroll: { value: 0 },
                uCursor: { value: new THREE.Vector2(0.5, 0.5) },
                uThinking: { value: 0 },
                uWellStrength: { value: 0 },
                uPressure: { value: 0 }
            },
            transparent: true,
            side: THREE.DoubleSide
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        // 3. LISTENERS
        window.addEventListener('resize', this.onResize);
    }

    private onResize = () => {
        if (!this.container) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    public updateScroll(y: number, max: number) {
        if (this.material) {
            // Normalize scrolling influence
            this.material.uniforms.uScroll.value = y / (max || 1000); 
        }
    }

    public updateCursor(x: number, y: number) {
        if (this.material) {
             this.material.uniforms.uCursor.value.set(x, 1.0 - y); 
        }
    }

    public setWellActive(active: boolean) {
        if (!this.material) return;
        const target = active ? AmplitudeCaps.WELL_STRENGTH : 0;
        gsap.to(this.material.uniforms.uWellStrength, {
            value: target,
            duration: 1.5,
            ease: "power2.inOut"
        });
    }

    public setPressure(value: number) {
        if (!this.material) return;
        // Cap pressure
        const safeValue = Math.min(value, AmplitudeCaps.SHADOW_PRESSURE);
        this.material.uniforms.uPressure.value = safeValue;
    }

    public start() {
        const animate = (time: number) => {
            this.animationId = requestAnimationFrame(animate);
            
            // Governance check
            performanceGovernor.update(time);
            if (performanceGovernor.currentTier !== 'LOW') {
                 // Convert time to seconds
                this.material.uniforms.uTime.value = time * 0.001;
                this.renderer.render(this.scene, this.camera);
            }
        };
        this.animationId = requestAnimationFrame(animate);
    }

    public stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    public dispose() {
        this.stop();
        window.removeEventListener('resize', this.onResize);
        this.container.removeChild(this.renderer.domElement);
        this.geometry.dispose();
        this.material.dispose();
        this.renderer.dispose();
    }
}

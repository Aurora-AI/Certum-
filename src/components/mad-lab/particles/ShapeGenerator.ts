import * as THREE from 'three';

// Utility to get random point in sphere
const randomInSphere = (radius: number) => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    return new THREE.Vector3(
        r * sinPhi * Math.cos(theta),
        r * sinPhi * Math.sin(theta),
        r * Math.cos(phi)
    );
};

// Utility to get random point in box
const randomInBox = (width: number, height: number, depth: number, center: THREE.Vector3) => {
    return new THREE.Vector3(
        (Math.random() - 0.5) * width + center.x,
        (Math.random() - 0.5) * height + center.y,
        (Math.random() - 0.5) * depth + center.z
    );
};

// Utility to get point on line (for edges)
const randomOnLine = (start: THREE.Vector3, end: THREE.Vector3) => {
    const t = Math.random();
    return new THREE.Vector3().copy(start).lerp(end, t);
};

export const generateShapes = (count: number) => {
    const shapes: Record<string, Float32Array> = {
        chaos: new Float32Array(count * 3),
        abstract: new Float32Array(count * 3),
        car: new Float32Array(count * 3),
        house: new Float32Array(count * 3)
    };

    const p = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
        // 1. CHAOS (Large Sphere / Cloud)
        // More dispersed
        const pChaos = randomInSphere(18);
        shapes.chaos[i * 3] = pChaos.x;
        shapes.chaos[i * 3 + 1] = pChaos.y;
        shapes.chaos[i * 3 + 2] = pChaos.z;

        // 2. ABSTRACT (DNA / Swirl)
        // More elegant flow
        const t = (i / count) * Math.PI * 8;
        const radius = 6 + Math.cos(t * 3) * 1.5;
        p.set(
            Math.cos(t) * radius,
            (i / count) * 24 - 12, // Height
            Math.sin(t) * radius
        );
        p.add(randomInSphere(0.6));
        shapes.abstract[i * 3] = p.x;
        shapes.abstract[i * 3 + 1] = p.y;
        shapes.abstract[i * 3 + 2] = p.z;

        // 3. CAR (Geometric Approx - Better Definition)
        // Sedan/Coupe Profile
        const r = Math.random();
        
        // Define Car Wheel definitions
        const wheelRadius = 1.1;
        const wheelWidth = 0.6;
        const wheelZ = 2.0;
        const frontX = 3.5;
        const rearX = -3.5;
        const wheelY = -2.0;

        if (r < 0.25) {
            // Wheels (Ring distribution)
            const angle = Math.random() * Math.PI * 2;
            const wR = wheelRadius * Math.sqrt(Math.random()); 
            const wX = Math.random() < 0.5 ? rearX : frontX;
            const wZ = Math.random() < 0.5 ? -wheelZ : wheelZ;
            
            p.set(0, Math.sin(angle) * wR, Math.cos(angle) * wR); // Rotate to face side? No, wheels are disks on X axis
            // Actually wheels are cylinders along Z usually, but looking from side...
            // Let's just make blobs at wheel positions
            p.set(wX, wheelY + Math.sin(angle)*wR, wZ + (Math.random()-0.5)*wheelWidth);
        } else if (r < 0.35) {
            // Headlights/Taillights
            const isFront = Math.random() > 0.5;
            p.set(
                isFront ? 6.5 : -6.5, 
                -0.5, 
                (Math.random()-0.5) * 3
            ); 
        } else {
             // Body (Aerodynamic)
             if (Math.random() > 0.45) {
                 // Lower Body (Chassis)
                 p.copy(randomInBox(13, 1.8, 4.8, new THREE.Vector3(0, -1.0, 0)));
             } else {
                 // Greenhouse (Cabin) - Tapered
                 // We fake tapering by checking X
                 const cabinX = (Math.random() - 0.5) * 8;
                 const cabinWidth = 3.8 * (1 - Math.abs(cabinX)/10); // Taper
                 p.set(
                     cabinX,
                     0.5 + Math.random() * 2.5,
                     (Math.random() - 0.5) * cabinWidth
                 );
             }
        }
        // Apply slight noise to car to make it "diffuse"
        p.add(randomInSphere(0.15));
        
        shapes.car[i * 3] = p.x;
        shapes.car[i * 3 + 1] = p.y; 
        shapes.car[i * 3 + 2] = p.z;


        // 4. HOUSE (Architectural Modernism)
        // L-Shape or Cantilever
        const r2 = Math.random();
        if (r2 < 0.5) {
            // Main Vertical Volume (Elevator shaft / Core)
            p.copy(randomInBox(5, 12, 5, new THREE.Vector3(-2, 0, -2)));
        } else if (r2 < 0.8) {
             // Cantilever Horizontal Volume (Living area)
            p.copy(randomInBox(14, 3, 8, new THREE.Vector3(2, 2, 0)));
        } else {
            // Ground Support / Pool / Deck
            p.copy(randomInBox(10, 0.5, 10, new THREE.Vector3(0, -5, 0)));
        }
        p.add(randomInSphere(0.2));

        shapes.house[i * 3] = p.x;
        shapes.house[i * 3 + 1] = p.y;
        shapes.house[i * 3 + 2] = p.z;
    }

    return shapes;
};

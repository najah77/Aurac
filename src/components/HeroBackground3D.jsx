import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveParticles = () => {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });

    const particleCount = 5000; // Increased count for density

    const [positions, colors, randoms] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const randoms = new Float32Array(particleCount); // For individual particle animation offset

        const color1 = new THREE.Color("#FF2E2E"); // Bright Red
        const color2 = new THREE.Color("#FF5C5C"); // Lighter Red

        for (let i = 0; i < particleCount; i++) {
            // Spherical distribution with some variation
            const r = 1.8 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Gradient mix
            const mixedColor = color1.clone().lerp(color2, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;

            randoms[i] = Math.random();
        }
        return [positions, colors, randoms];
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize mouse position (-1 to 1)
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const scrollY = window.scrollY;
        
        if (meshRef.current) {
            const vh = window.innerHeight;
            
            // Mouse Interaction Targets
            const targetRotX = mouseRef.current.y * 0.2; // Tilt up/down
            const targetRotY = mouseRef.current.x * 0.2; // Turn left/right
            const targetPosX = mouseRef.current.x * 0.1; // Parallax X
            const targetPosY = mouseRef.current.y * 0.1; // Parallax Y

            // Smooth Interpolation (Lerp)
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX + (scrollY * 0.0005), 0.05);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY + (time * 0.05), 0.05); // Continuous slow rotation + mouse
            
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosX, 0.05);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosY, 0.05);


            // SCALING EFFECT: Starts large and shrinks on scroll
            const targetScale = Math.max(0.6, 2.5 - (scrollY / vh) * 1.0);
            
            // Add a "breathing" scale effect
            const breathing = Math.sin(time * 0.5) * 0.05 + 1; 
            
            const currentScale = meshRef.current.scale.x;
            // We want the base scale to be driven by scroll, multiplied by breathing
            const finalTargetScale = targetScale * breathing;
            
            const smoothedScale = THREE.MathUtils.lerp(currentScale, finalTargetScale, 0.1);

            meshRef.current.scale.set(smoothedScale, smoothedScale, smoothedScale);
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                sizeAttenuation={true}
                depthWrite={false}
                transparent={true}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const HeroBackground3D = ({ style, className }) => {
    return (
        <div className={`hero-3d-background ${className || ''}`} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.8,
            pointerEvents: 'none',
            ...style
        }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: false
                }}
            >
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <InteractiveParticles />
                </Float>
            </Canvas>
        </div>
    );
};

export default HeroBackground3D;

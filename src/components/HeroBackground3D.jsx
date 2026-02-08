import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveParticles = () => {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });

    const particleCount = 4000;

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const color = new THREE.Color("#FF0000"); // Red

        for (let i = 0; i < particleCount; i++) {
            // Spherical distribution
            const r = 1.5 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Varying red shades
            const shade = Math.random() * 0.5 + 0.5;
            colors[i * 3] = color.r * shade;
            colors[i * 3 + 1] = color.g * shade;
            colors[i * 3 + 2] = color.b * shade;
        }
        return [positions, colors];
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const scrollY = window.scrollY;

        // Use simpler transforms or check if visible before updating
        if (meshRef.current) {
            const vh = window.innerHeight;
            // SCALING EFFECT: Starts large and shrinks on scroll
            const targetScale = Math.max(0.6, 2.5 - (scrollY / vh) * 1.0);

            // Limit lerp calculation frequency or complexity if needed? No, standard lerp is cheap.
            const currentScale = meshRef.current.scale.x;
            const smoothedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);

            meshRef.current.scale.set(smoothedScale, smoothedScale, smoothedScale);
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.rotation.z = scrollY * 0.001;
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
                size={0.025} // Slightly larger to compensate for fewer particles
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

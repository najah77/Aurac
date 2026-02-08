import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Showreel.css';

const Showreel = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["100px", "0px"]);

    // For 3D floating effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePos({
            x: (clientX / innerWidth - 0.5) * 40,
            y: (clientY / innerHeight - 0.5) * 40
        });
    };

    return (
        <section className="showreel-section" ref={containerRef} onMouseMove={handleMouseMove}>
            <div className="container">
                <motion.div
                    className="showreel-container"
                    style={{ scale, opacity, borderRadius }}
                >
                    <div className="aura-object-wrapper">
                        <div className="aura-scene">
                            <motion.div
                                className="aura-core"
                                animate={{
                                    rotateX: mousePos.y,
                                    rotateY: mousePos.x,
                                    rotateZ: [0, 360]
                                }}
                                transition={{
                                    rotateX: { type: "spring", stiffness: 50 },
                                    rotateY: { type: "spring", stiffness: 50 },
                                    rotateZ: { duration: 20, repeat: Infinity, ease: "linear" }
                                }}
                            >
                                <div className="cube-face front"></div>
                                <div className="cube-face back"></div>
                                <div className="cube-face right"></div>
                                <div className="cube-face left"></div>
                                <div className="cube-face top"></div>
                                <div className="cube-face bottom"></div>

                                {/* Inner Core */}
                                <div className="inner-glow"></div>
                            </motion.div>

                            {/* Floating Rings */}
                            <motion.div
                                className="aura-ring ring-1"
                                animate={{ rotateX: 70, rotateZ: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="aura-ring ring-2"
                                animate={{ rotateY: 70, rotateZ: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <div className="aura-text-overlay">
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Showreel;

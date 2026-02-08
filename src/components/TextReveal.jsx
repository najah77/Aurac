import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './TextReveal.css';

const TextReveal = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"]
    });

    const text = "We help brands look better, work smarter, and grow faster.";
    const words = text.split(" ");

    return (
        <section className="text-reveal-section" ref={containerRef}>
            <div className="container">
                <div className="reveal-text-container">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = (i + 1) / words.length;
                        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                        return (
                            <motion.span
                                key={i}
                                style={{ opacity }}
                                className="reveal-word"
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TextReveal;

import React from 'react';
import { motion } from 'framer-motion';
import './StudioIntro.css';

const SplitText = ({ children, className, delay = 0 }) => {
    return (
        <motion.span
            className={className}
            style={{ display: 'inline-block', perspective: '400px' }} // perspective matches GSAP example
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.02,
                        delayChildren: delay
                    }
                }
            }}
        >
            {children.split('').map((char, i) => (
                <motion.span
                    key={i}
                    style={{ display: 'inline-block', transformOrigin: '100% 50%', willChange: 'transform, opacity', color: 'inherit' }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 4,
                            rotateX: -180,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            transition: {
                                duration: 1,
                                ease: "backOut"
                            }
                        }
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

const StudioIntro = ({ onContactClick }) => {
    return (
        <section className="studio-intro" id="studio-intro">
            <div className="container studio-intro-container">
                <div className="studio-intro-content">

                    <div className="studio-title-wrapper">
                        <h1 className="studio-title-line">
                            <SplitText className="studio-word-block">
                                Full-Stack Digital &
                            </SplitText>
                            <br />
                            <SplitText
                                className="studio-word-block text-highlight"
                                delay={0.5} // Start slightly after first line
                            >
                                Creative Studio
                            </SplitText>
                        </h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="studio-description"
                    >
                        Web, design, marketing, branding, and storytelling — all in one studio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="studio-actions"
                    >
                        <button className="primary-btn" onClick={onContactClick}>
                            Let’s Talk
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StudioIntro;

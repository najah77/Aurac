import React from 'react';
import { motion } from 'framer-motion';
import './Section.css'; // Common styles

const About = () => {
    return (
        <section className="section about-section white-theme" id="about">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="white-line" style={{ top: '0', left: '0', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}></div>
                <div className="section-header">
                    <div style={{ overflow: 'hidden' }}>
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="section-label"
                        >
                            Who We Are
                        </motion.span>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="section-title"
                        >
                            Aurac is a full-stack digital & creative studio.
                        </motion.h2>
                    </div>
                </div>

                <div className="about-content">
                    <div style={{ overflow: 'hidden' }}>
                        <motion.p
                            initial={{ y: "40%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="big-text"
                        >
                            We help brands look better, work smarter, and grow faster.
                            Mix some code, creativity, and strategy to build digital experiences people actually care about.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pillars-grid"
                        style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
                    >
                        <div className="pillar">
                            <h3>Simple ideas.</h3>
                        </div>
                        <div className="pillar">
                            <h3>Clean execution.</h3>
                        </div>
                        <div className="pillar">
                            <h3>Real impact.</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Ambient white glow */}
            <div className="white-orb" style={{ bottom: '-20%', left: '-10%', width: '600px', height: '600px', opacity: 0.1 }}></div>
        </section>
    );
};

export default About;

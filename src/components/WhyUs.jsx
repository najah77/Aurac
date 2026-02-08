import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const WhyUs = () => {
    return (
        <section className="section why-us-section white-theme" id="why-us">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="why-content"
                >
                    <span className="section-label">Why Aurac?</span>
                    <h2 className="section-title">
                        We care about how it looks, how it works, and how it grows.
                    </h2>
                    <p className="big-text">
                        We’re not just another agency — we’re one team blending tech, marketing, and creativity, working fast and strategically to build modern brands that look great, work flawlessly, and grow consistently.
                    </p>
                </motion.div>
            </div>
            {/* Decorative Elements for contrast */}
            <div className="white-orb" style={{ top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)' }}></div>
        </section>
    );
};

export default WhyUs;

import React from 'react';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';
import './Hero.css';

const Hero = ({ onContactClick }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-background-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-logo-anim-container">
                        <BrandLogo width="600" color="#FFFFFF" animated={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;

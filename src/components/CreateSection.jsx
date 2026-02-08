import React from 'react';
import { motion } from 'framer-motion';
import demoVideo from '../assets/Demo_Video.mp4';

import './CreateSection.css';

const CreateSection = () => {
    return (
        <section className="section create-showcase-section" id="create">
            <div className="container">
                <div className="create-grid">
                    <motion.div
                        className="create-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="section-label" style={{ color: '#000', opacity: 0.9 }}>Creative Production</span>
                        <h2 className="section-title">We Create.</h2>
                        <p className="big-text">
                            Stories that hit. Visuals that stick. from the films to lifestyle shoots, we bring your vision to life with precision.
                        </p>

                        <div className="create-tags">
                            <span className="create-tag">Creative Direction</span>
                            <span className="create-tag">Motion Graphics</span>
                            <span className="create-tag">Product Shoots</span>
                            <span className="create-tag">Brand Films</span>
                            <span className="create-tag">Lifestyle Shoots</span>
                            <span className="create-tag">Film With Aurac</span>





                        </div>
                    </motion.div>

                    <motion.div
                        className="create-visual-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="visual-overlay"></div>
                        <video
                            className="create-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={demoVideo}
                        ></video>
                        <div className="visual-content">
                            <div className="play-hint">
                                <div className=""></div>
                                <span></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CreateSection;

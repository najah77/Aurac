import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Contact = ({ onContactClick }) => {
    return (
        <section className="section contact-section white-theme" id="contact" style={{ textAlign: 'center' }}>
            <div className="container">
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="section-title"
                            style={{ margin: '0 auto 2rem' }}
                        >
                            Every idea has an aura. <br />
                            <span>Let’s amplify it.</span>
                        </motion.h2>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.p
                            initial={{ y: "40%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="big-text"
                            style={{ margin: '0 auto 3rem' }}
                        >
                            Whether it’s a website, brand, campaign, or content — we’ve got you.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button onClick={onContactClick} className="primary-btn">
                            Have an idea? Let’s build it.
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Background Animations */}
            <motion.div
                className="white-orb"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    top: '10%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(235, 50, 35, 0.08) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />
            <motion.div
                className="white-orb"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
                style={{
                    bottom: '5%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0
                }}
            />
        </section>
    );
};

export default Contact;

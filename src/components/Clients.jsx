import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Clients = () => {
    const clients = [
        "Startups", "Personal brands", "Businesses & companies", "Creators & founders"
    ];

    return (
        <section className="section clients-section white-theme" id="clients">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="clients-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', textAlign: 'left' }}>
                    <div className="section-header" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="section-label"
                            >
                                Who We Work With
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
                                If you’re building something meaningful — we’re in.
                            </motion.h2>
                        </div>
                    </div>

                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {clients.map((client, index) => (
                            <li key={index} style={{ overflow: 'hidden', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                <motion.div
                                    initial={{ x: "-20%", opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                        fontWeight: '600',
                                        padding: '1rem 0',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    {client}
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Clients;

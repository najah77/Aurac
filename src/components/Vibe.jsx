import React from 'react';
import { motion } from 'framer-motion';
import './Vibe.css';

const Vibe = () => {
    const vibes = ["Modern.", "Minimal.", "Creative.", "Strategic."];

    return (
        <section className="section vibe-section" id="vibe">
            <div className="container">
                <span className="section-label">Our Vibe</span>

                <div className="vibe-words">
                    {vibes.map((vibe, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                            whileHover={{ scale: 1.05, color: "#fff" }}
                            className="vibe-word"
                        >
                            {vibe}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="vibe-description"
                >
                    No unnecessary jargon. No overpromising. Just good work.
                </motion.p>
            </div>
        </section>
    );
};

export default Vibe;

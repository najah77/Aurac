import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Build",
            items: ["Website design & development", "Full-stack web apps", "E-commerce solutions", "Front-end & back-end development"],
            desc: "We build fast, scalable, and future-ready products."
        },
        {
            title: "Design",
            items: ["UI / UX design", "Wireframes & prototypes", "Website & app redesigns", "Design systems & aesthetics"],
            desc: "Clean design that feels right — and works better."
        },
        {
            title: "Grow",
            items: ["Social media management", "SEO & organic growth", "Performance marketing & ads", "Content strategy & analytics"],
            desc: "We help brands get seen — by the right people."
        },

        {
            title: "Brand",
            items: ["Branding & rebranding", "Logo & visual identity", "Brand strategy & positioning", "Campaign concepts"],
            desc: "We don’t just make brands look good — we make them make sense."
        }
    ];

    return (
        <section className="section services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <div style={{ overflow: 'hidden' }}>
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="section-label"
                        >
                            What We Do
                        </motion.span>
                    </div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, backgroundColor: 'var(--bg-secondary)' }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="service-card"
                        >
                            <h3 className="service-title">{service.title}</h3>
                            <ul className="service-list">
                                {service.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (i * 0.05) + 0.5 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.p
                                className="service-desc"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index * 0.1) + 0.8 }}
                            >
                                {service.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

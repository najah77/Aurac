import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Section.css';
import './Process.css';

const Process = () => {
    const steps = [
        {
            num: '01',
            title: 'Understand',
            desc: 'Your brand, goals, and audience',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            )
        },
        {
            num: '02',
            title: 'Design',
            desc: 'Clean visuals + smart UX',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            )
        },
        {
            num: '03',
            title: 'Build',
            desc: 'Solid tech & smooth performance',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            num: '04',
            title: 'Launch',
            desc: 'Go live with confidence',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            num: '05',
            title: 'Grow',
            desc: 'Optimize, market, and scale',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            )
        },
    ];

    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end 80%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const lineHeight = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    return (
        <section className="section process-section" id="process" ref={containerRef}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-label">How We Work</span>
                    <h2 className="section-title">Simple process. Zero chaos.</h2>
                </motion.div>

                <div className="process-timeline-container">
                    {/* Vertical Line Background */}
                    <div className="process-line-bg"></div>

                    {/* Active Progress Line */}
                    <motion.div
                        className="process-line-progress"
                        style={{ height: lineHeight }}
                    ></motion.div>

                    <div className="process-list-vertical">
                        {steps.map((step, index) => (
                            <div key={index} className="process-row">
                                <motion.div
                                    className="process-marker"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <div className="marker-dot"></div>
                                </motion.div>
                                <motion.div
                                    className="process-content-card"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <div className="process-card-header">
                                        <span className="process-num">{step.num}</span>
                                        <motion.div
                                            className="process-icon"
                                            initial={{ scale: 0, opacity: 0, rotate: -20 }}
                                            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                        >
                                            <motion.div
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2
                                                }}
                                            >
                                                {step.icon}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <h3 className="process-step-title">{step.title}</h3>
                                    <p className="process-step-desc">{step.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Decorative Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="white-orb"
                    style={{ top: '10%', right: '5%', width: '400px', height: '400px' }}
                />
            </div>
        </section>
    );
};

export default Process;

import React from 'react';
import { motion } from 'framer-motion';

const BrandLogo = ({ className = "", width = "140", color = "currentColor", animated = false }) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay: i * 0.05,
                    type: "spring",
                    duration: 1.5,
                    bounce: 0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5
                },
                opacity: { delay: i * 0.05, duration: 0.01 }
            }
        })
    };

    const dotPulse = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.5 + (i * 0.1),
                type: "spring",
                stiffness: 200,
                damping: 10,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
            }
        })
    };

    return (
        <div className={`brand-wrapper ${className}`}>
            <motion.svg
                width={width}
                height="auto"
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="AURAC Logo"
                initial={animated ? "hidden" : "visible"}
                animate="visible"
            >
                <defs>
                    <linearGradient id="auraGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF2E2E" />
                        <stop offset="100%" stopColor="#FF5C5C" />
                    </linearGradient>
                </defs>

                {/* A: Modern Triangle with gap */}
                <motion.path
                    variants={draw}
                    custom={0}
                    d="M10 40L25 5L40 40"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <motion.circle
                    variants={dotPulse}
                    custom={0}
                    cx="25" cy="28" r="3"
                    fill="#FF2E2E"
                />

                {/* U: Wide and squared */}
                <motion.path
                    variants={draw}
                    custom={1}
                    d="M55 5V28C55 35 59 40 67.5 40C76 40 80 35 80 28V5"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="square"
                />

                {/* R: Disconnected leg for style */}
                <motion.path
                    variants={draw}
                    custom={2}
                    d="M95 40V5H110C118 5 123 10 123 18C123 24 119 28 112 29"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="square"
                />
                <motion.path
                    variants={draw}
                    custom={2.5}
                    d="M112 29L124 40"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="square"
                />

                {/* A: Second A, matching first but different accent */}
                <motion.path
                    variants={draw}
                    custom={3}
                    d="M135 40L150 5L165 40"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <motion.circle
                    variants={dotPulse}
                    custom={1}
                    cx="150" cy="28" r="3"
                    fill="#FF2E2E"
                />

                {/* C: Minimal arc with slight curve */}
                <motion.path
                    variants={draw}
                    custom={4}
                    d="M195 12C193 8 189 5 182 5C173 5 168 12 168 22.5C168 33 173 40 182 40C189 40 193 37 195 33"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </motion.svg>
        </div>
    );
};

export default BrandLogo;

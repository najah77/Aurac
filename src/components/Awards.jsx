import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AchievementsModal from './AchievementsModal';
import './Awards.css';

const Awards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const awards = [
        {
            year: "2024",
            title: "Best Digital Campaign",
            organization: "Awwwards",
            description: " Recognized for outstanding creativity and innovation in digital storytelling."
        },
        {
            year: "2023",
            title: "Site of the Day",
            organization: "FWA",
            description: "Awarded for exceptional user experience and cutting-edge web design."
        },
        {
            year: "2023",
            title: "Creative Excellence",
            organization: "Clio Awards",
            description: "Honored for pushing boundaries in visual identity and brand strategy."
        },
        {
            year: "2022",
            title: "Innovation in Design",
            organization: "Design Week",
            description: "Celebrated for our unique approach to interactive web experiences."
        }
    ];

    const extendedAwards = [
        ...awards,
        {
            year: "2022",
            title: "Digital Agency of the Year",
            organization: "Webby Awards",
            description: "For consistent excellence across multiple client projects."
        },
        {
            year: "2021",
            title: "Best UI/UX Design",
            organization: "CSS Design Awards",
            description: "Exceptional user interface and experience design."
        },
        {
            year: "2021",
            title: "Top Creative Studio",
            organization: "Behance",
            description: "Voted by the community for top-tier visual work."
        },
        {
            year: "2020",
            title: "Excellence in Motion",
            organization: "Vimeo Staff Pick",
            description: "For outstanding cinematography and motion graphics."
        }
    ];

    return (
        <section className="section awards-section" id="awards">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-label"
                    >
                        Achievements
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        What We’ve Done.
                    </motion.h2>
                </div>

                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className="award-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="award-year">{award.year}</div>
                            <div className="award-content">
                                <h3 className="award-title">{award.title}</h3>
                                <div className="award-org">{award.organization}</div>
                                <p className="award-desc">{award.description}</p>
                            </div>
                            <div className="award-card-footer">
                                <button className="view-more-icon-btn" onClick={() => setIsModalOpen(true)}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div className="award-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="section-footer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <button className="primary-btn common-view-more" onClick={() => setIsModalOpen(true)}>
                        View All Achievements
                    </button>
                </motion.div>
            </div>

            <AchievementsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                achievements={extendedAwards}
            />
        </section>
    );
};

export default Awards;

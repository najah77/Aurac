import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AchievementsModal.css';

const AchievementsModal = ({ isOpen, onClose, achievements }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="achievements-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="achievements-modal-content"
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <div>
                                <span className="modal-label">AWARDS & RECOGNITION</span>
                                <h2 className="modal-title">All Achievements</h2>
                            </div>
                            <button className="modal-close-btn" onClick={onClose}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className="modal-scroll-area" data-lenis-prevent>
                            <div className="modal-achievements-list">
                                {achievements.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="modal-achievement-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <div className="item-year">{item.year}</div>
                                        <div className="item-details">
                                            <h3 className="item-title">{item.title}</h3>
                                            <div className="item-org">{item.organization}</div>
                                            <p className="item-desc">{item.description}</p>
                                        </div>
                                        <div className="item-status">
                                            <span className="status-badge">Winner</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <p>Showing {achievements.length} global recognitions</p>
                            <button className="primary-btn" onClick={onClose}>Close View</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AchievementsModal;

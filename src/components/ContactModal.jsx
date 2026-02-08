import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Design',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="contact-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="contact-modal-content"
                        data-lenis-prevent
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="modal-inner">
                            <div className="modal-sidebar">
                                <div className="sidebar-top">
                                    <span className="modal-label">Get in Touch</span>
                                    <h2 className="modal-title">Let’s Start <br /> Something Big</h2>
                                </div>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span className="item-label">Email us</span>
                                        <a href="mailto:auraofaurac@gmail.com" className="item-value">auraofaurac@gmail.com</a>
                                    </div>
                                    <div className="contact-item">
                                        <span className="item-label">Studio</span>
                                        <span className="item-value">India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-form-area">
                                {isSubmitted ? (
                                    <motion.div
                                        className="success-message"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <div className="success-icon">✓</div>
                                        <h3>Message Received!</h3>
                                        <p>Our team will reach out to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-group">
                                            <label>What's your name?</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Your email address</label>
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>What are you looking for?</label>
                                            <div className="custom-select-container">
                                                <div
                                                    className={`custom-select-header ${isDropdownOpen ? 'active' : ''}`}
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            setIsDropdownOpen(!isDropdownOpen);
                                                        }
                                                    }}
                                                >
                                                    {formData.service}
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </div>
                                                <AnimatePresence>
                                                    {isDropdownOpen && (
                                                        <motion.div
                                                            className="custom-options"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {['Design', 'Development', 'Branding', 'Creative Production', 'Something Else'].map((opt) => (
                                                                <div
                                                                    key={opt}
                                                                    className={`custom-option ${formData.service === opt ? 'selected' : ''}`}
                                                                    onClick={() => {
                                                                        setFormData({ ...formData, service: opt });
                                                                        setIsDropdownOpen(false);
                                                                    }}
                                                                    tabIndex={0}
                                                                    onKeyDown={(e) => {
                                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                                            e.preventDefault();
                                                                            setFormData({ ...formData, service: opt });
                                                                            setIsDropdownOpen(false);
                                                                        }
                                                                    }}
                                                                >
                                                                    {opt}
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tell us about your project</label>
                                            <textarea
                                                placeholder="A brief description..."
                                                rows="4"
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="primary-btn submit-btn">
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;

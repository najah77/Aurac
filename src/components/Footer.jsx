import React from 'react';
import BrandLogo from './BrandLogo';
import './Footer.css';
import '../index.css';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <BrandLogo width="120" color="#FFFFFF" className="footer-logo-svg" />
                        <p className="footer-desc">Good ideas deserve good execution.</p>
                    </div>

                    <div className="footer-info">
                        <div className="footer-block">
                            <h4>Social</h4>

                            <div className="social-links">
                                <a href="https://www.instagram.com/aurac.co?igsh=MWVleTI0ODhlN3RiZQ==" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="mailto:auraofaurac@gmail.com" aria-label="Whatsapp">
                                    <FaWhatsapp />
                                </a>

                                <a href="mailto:auraofaurac@gmail.com" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                        <div className="footer-block">
                            <h4>Location</h4>
                            <p>India</p>
                        </div>
                        <div className="footer-block">
                            <h4>Contact</h4>
                            <a href="mailto:auraofaurac@gmail.com">auraofaurac@gmail.com</a>
                        </div>
                        <div className="footer-block">
                            <h4>Company</h4>
                            <button onClick={() => scrollToSection('about')} className="footer-link">Who we are</button>
                            <button onClick={() => scrollToSection('services')} className="footer-link">What we do</button>
                            <button onClick={() => scrollToSection('create')} className="footer-link">We create</button>
                            <button onClick={() => scrollToSection('awards')} className="footer-link">What we've done</button>
                        </div>
                        <div className="footer-block">
                            <h4>Explore</h4>
                            <button onClick={() => scrollToSection('why-us')} className="footer-link">Why Aurac</button>
                            <button onClick={() => scrollToSection('process')} className="footer-link">How we work</button>
                            <button onClick={() => scrollToSection('clients')} className="footer-link">Who we work with</button>
                            <button onClick={() => scrollToSection('vibe')} className="footer-link">Our vibe</button>
                        </div>


                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; Aurac. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

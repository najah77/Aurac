import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <BrandLogo width="100" color="#FFFFFF" />
                </div>

                <div className="nav-links">
                    <button onClick={() => scrollToSection('about')} className="nav-link">Who We Are</button>
                    <button onClick={() => scrollToSection('services')} className="nav-link">What We Do</button>
                    <button onClick={() => scrollToSection('create')} className="nav-link">We Create</button>
                    <button onClick={() => scrollToSection('awards')} className="nav-link">What We’ve Done</button>
                    <button onClick={() => scrollToSection('why-us')} className="nav-link">Why Aurac</button>
                    <button onClick={() => scrollToSection('process')} className="nav-link">How We Work</button>
                    <button onClick={() => scrollToSection('clients')} className="nav-link">Who We Work With</button>
                    <button onClick={() => scrollToSection('vibe')} className="nav-link">Our Vibe</button>
                    <button onClick={onContactClick} className="nav-cta">Let’s Talk</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

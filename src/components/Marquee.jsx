import React from 'react';
import './Marquee.css';

const Marquee = () => {
    const items = [
        "Build", "Design", "Grow", "Create", "Brand",
        "Build", "Design", "Grow", "Create", "Brand",
        "Build", "Design", "Grow", "Create", "Brand"
    ];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {items.map((item, index) => (
                    <span key={index} className="marquee-item">
                        {item} <span className="marquee-dot">•</span>
                    </span>
                ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
                {items.map((item, index) => (
                    <span key={`clone-${index}`} className="marquee-item">
                        {item} <span className="marquee-dot">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;

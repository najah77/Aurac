import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews-section">
            <div className="container review-container">
                <div className="review-stars">★★★★★</div>
                <blockquote className="review-quote">
                    "A refined experience from start to finish. The quality of the dates is unmatched, and the packaging feels like receiving a gift from a dear friend."
                </blockquote>
                <cite className="review-author">Sarah Al-Mansour, Dubai</cite>
            </div>
        </section>
    );
};

export default Reviews;

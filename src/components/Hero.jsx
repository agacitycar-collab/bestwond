import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Business with Future-Proof Technology</h1>
            <p className="hero-subtitle">
              Xedge empowers small and medium businesses in Hospitality, Retail, and FinTech with comprehensive digital transformation solutions. 
              We bridge the gap between cutting-edge innovation and practical business application.
            </p>
            <div className="hero-buttons">
              <Link to="#contact" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <Link to="#services" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="url(#gradient)" />
                <circle cx="200" cy="200" r="150" fill="url(#gradient2)" opacity="0.3" />
                <path d="M150 150 L250 150 L250 250 L150 250 Z" stroke="white" strokeWidth="4" fill="none" />
                <path d="M180 180 L220 180 L220 220 L180 220 Z" stroke="white" strokeWidth="3" fill="none" />
                <path d="M200 100 L200 300" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M100 200 L300 200" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
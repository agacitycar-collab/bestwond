import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Xedge</h2>
          <p>
            We are a Moroccan digital transformation agency specializing in empowering small and medium-sized businesses across three core verticals: Hospitality, Retail, and FinTech.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              Empower experience through technology — enabling SMBs to compete, scale, and thrive in the digital economy. 
              Founded on the principle of democratizing advanced technology for smaller enterprises, Xedge bridges the gap 
              between cutting-edge innovation and practical business application.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              To become the leading digital transformation partner for SMBs across Morocco, the MENA region, 
              and emerging markets worldwide, making future-proof technology accessible to businesses of all sizes.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>75%</h4>
                <p>SMBs need digital transformation</p>
              </div>
              <div className="stat">
                <h4>25K+</h4>
                <p>Target businesses in Morocco</p>
              </div>
              <div className="stat">
                <h4>95K</h4>
                <p>Total SMBs in Morocco</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="url(#aboutGradient)" />
                <circle cx="200" cy="200" r="120" fill="url(#aboutGradient2)" opacity="0.5" />
                <path d="M150 150 L250 150 L250 250 L150 250 Z" stroke="white" strokeWidth="3" fill="none" />
                <path d="M100 200 L300 200" stroke="white" strokeWidth="2" opacity="0.5" />
                <path d="M200 100 L200 300" stroke="white" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="30" stroke="white" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="100%" stopColor="#2563eb" />
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

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">XEDGE</h3>
            <p className="footer-description">
              Empowering small and medium businesses in Hospitality, Retail, and FinTech 
              with comprehensive digital transformation solutions.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Industries</h4>
            <ul>
              <li><Link to="#industries">Hospitality</Link></li>
              <li><Link to="#industries">Retail</Link></li>
              <li><Link to="#industries">FinTech</Link></li>
              <li><Link to="#solutions">All Solutions</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="#about">About Us</Link></li>
              <li><Link to="#services">Services</Link></li>
              <li><Link to="#contact">Contact</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Rue Mohammed V, Casablanca</li>
              <li>info@xedge.ma</li>
              <li>+212 522 123 456</li>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Xedge. All rights reserved.</p>
          <div className="footer-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h2>XEDGE</h2>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
              <li><Link to="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="#industries" onClick={() => setIsMenuOpen(false)}>Industries</Link></li>
              <li><Link to="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
              <li><Link to="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
            <Link to="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'hide-on-home' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Selfless <span className="logo-highlight">Serving Society</span>
        </Link>
        
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/what-we-do" 
              className={`nav-link ${location.pathname === '/what-we-do' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              What We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/case-studies" 
              className={`nav-link ${location.pathname === '/case-studies' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Case Studies
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className="nav-link nav-link-button"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

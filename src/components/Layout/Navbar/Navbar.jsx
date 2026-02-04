import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar__logo">
        THOMAS<span>REIX</span>
      </a>
      
      <div className="navbar__menu">
        <ul className="navbar__links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar__status">Stage Mai-Juin 2026</div>
      </div>

      <button 
        className="navbar__hamburger" 
        id="hamburger"
        aria-label="Menu"
        onClick={() => {
          document.getElementById('hamburger').classList.toggle('active');
          document.getElementById('mobileMenu').classList.toggle('active');
          document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('active') ? 'hidden' : '';
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
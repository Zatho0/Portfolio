import React from 'react';
import './MobileMenu.css';

const MobileMenu = () => {
  const closeMenu = () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('mobileMenu').classList.remove('active');
    document.body.style.overflow = '';
  };

  return (
    <div className="mobile-menu" id="mobileMenu">
      <a href="#about" onClick={closeMenu}>À propos</a>
      <a href="#projects" onClick={closeMenu}>Projets</a>
      <a href="#skills" onClick={closeMenu}>Compétences</a>
      <a href="#contact" onClick={closeMenu}>Contact</a>
      <div className="mobile-menu__status">
        <span>🟢</span> Disponible Mai-Juin 2026
      </div>
    </div>
  );
};

export default MobileMenu;
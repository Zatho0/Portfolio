import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://linkedin.com/in/thomas-reix" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Zatho0" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:thom.reix4@outlook.com">Email</a>
      </div>
      <div className="footer__copyright">
        © {currentYear} Thomas Reix - Étudiant Développeur Web
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import RevealOnScroll from '../../UI/RevealOnScroll/RevealOnScroll';
import './Contact.css';

const contactInfo = [
  { icon: '📱', label: 'Téléphone', value: '06 35 97 78 77' },
  { icon: '💼', label: 'LinkedIn', value: 'Thomas Reix' },
  { icon: '📍', label: 'Localisation', value: 'Joué-lès-Tours' }
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__glow"></div>
      <div className="container">
        <RevealOnScroll>
          <div className="contact__content">
            <span className="section-tag">Contact</span>
            <h2 className="contact__title">Discutons de votre projet</h2>
            <div className="contact__subtitle">Stage Mai - Juin 2026 • 2 mois • Tours</div>
            <p className="contact__text">
              Je suis disponible et motivé pour rejoindre votre équipe et contribuer 
              à vos projets web.
            </p>
            
            <a href="mailto:thom.reix4@outlook.com" className="contact__email">
              thom.reix4@outlook.com
            </a>

            <div className="contact__details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__item">
                  <div className="contact__icon">{info.icon}</div>
                  <div>
                    <strong>{info.label}</strong>
                    <span>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
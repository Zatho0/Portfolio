import React from 'react';
import RevealOnScroll from '../../UI/RevealOnScroll/RevealOnScroll';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <span className="section-tag">Mon Profil</span>
            <h2 className="section-title">Pourquoi me choisir ?</h2>
          </div>
        </RevealOnScroll>
        
        <div className="about__grid">
          <RevealOnScroll delay={0.2}>
            <div className="about__text">
              <p>
                Après une expérience enrichissante en service civique où j'aidais les seniors 
                à maîtriser l'informatique, j'ai développé une solide capacité pédagogique et 
                une grande patience.
              </p>
              <p>
                Aujourd'hui en formation à SUPINFO après une Prépatech au CEFIM, je maîtrise 
                les technologies modernes du web et je suis particulièrement attiré par la création 
                d'interfaces intuitives.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.4}>
            <div className="about__stats">
              <div className="stat-card">
                <span className="stat-card__number">21</span>
                <div className="stat-card__label">Ans • Motivé</div>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">2</span>
                <div className="stat-card__label">Mois • Mai-Juin</div>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">React, Python</span>
                <div className="stat-card__label">Stack principale</div>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">37</span>
                <div className="stat-card__label">Indre-et-Loire</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
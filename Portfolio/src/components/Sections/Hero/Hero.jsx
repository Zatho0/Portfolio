import React, { useEffect } from 'react';
import './Hero.css';
import photo from './REIX-Thomas.jpg';

const Hero = () => {
  useEffect(() => {
    // Parallax effect (desktop only)
    if (window.matchMedia("(min-width: 968px)").matches) {
      const handleMouseMove = (e) => {
        const shapes = document.querySelectorAll('.hero__shape');
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        shapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.5;
          shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero__grid"></div>
      <div className="hero__shapes">
        <div className="hero__shape"></div>
        <div className="hero__shape"></div>
        <div className="hero__shape"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__tag">Étudiant SUPINFO - 21 ans</span>
          <h1>
            Recherche un<br />
            <span>Stage Dev Web</span><br />
            2 mois
          </h1>
          <div className="hero__subtitle">Mai - Juin 2026 • Tours / Indre-et-Loire </div>
          <p>
            Actuellement en Bachelor Développeur à SUPINFO Tours, je recherche un stage 
            de 2 mois pour mettre en pratique mes compétences en React, JavaScript et 
            développement web moderne.
          </p>
          
          <div className="hero__info">
            <div className="hero__info-item">
              <span>📍</span>
              <span>Joué-lès-Tours</span>
            </div>
            <div className="hero__info-item">
              <span>🚗</span>
              <span>Permis B</span>
            </div>
            <div className="hero__info-item">
              <span>💼</span>
              <span>React • JS • Tailwind • Python</span>
            </div>
          </div>

          <div className="hero__buttons">
            <a href="mailto:thom.reix4@outlook.com" className="btn btn--primary">
              📧 Me contacter
            </a>
            <a href="#projects" className="btn btn--secondary">
              💻 Voir mes projets
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="photo">
            <div className="photo__dots"></div>
            <div className="photo__deco"></div>
            <div className="photo__frame">
              <img src={photo} alt="Thomas Reix - Développeur Web" />
              <div className="photo__overlay"></div>
            </div>
            <div className="photo__badge">21 ans</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
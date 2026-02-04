import React from 'react';
import RevealOnScroll from '../../UI/RevealOnScroll/RevealOnScroll';
import ProjectCard from './ProjectCard';
import './Projects.css';
import photo from './SiteAuPtitReflexo.png';

const projectsData = [
  {
    category: 'Application Web (EN COURS DE CREATION)',
    title: 'Kanban Collaborative',
    description: 'Clone de Trello avec gestion de boards, colonnes et cartes en Drag & Drop, authentification JWT et persistance des données.',
    tech: ['React', 'Strapi', 'API REST', 'JWT'],
    gradient: 'from-blue-900 to-blue-500'
  },
  {
    category: 'Site Vitrine',
    title: 'Au Ptit Réflexo',
    description: 'Site vitrine complet avec formulaires PHP fonctionnels, design responsive Tailwind et création du cahier des charges.',
    tech: ['HTML/CSS', 'Tailwind', 'PHP', 'Figma'],
    image: photo,
    url: 'https://au-ptit-reflexo.fr/'
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <span className="section-tag">Réalisations</span>
            <h2 className="section-title">Projets récents</h2>
          </div>
        </RevealOnScroll>
        
        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import RevealOnScroll from '../../UI/RevealOnScroll/RevealOnScroll';
import SkillCategory from './SkillCategory';
import './Skills.css';

const skillsData = [
  {
    title: 'Frontend',
    icon: '⚡',
    skills: ['ReactJS', 'JavaScript ES6+', 'HTML5 / CSS3', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend & Outils',
    icon: '🔧',
    skills: ['Python','mySQL', 'API REST', 'Git / GitHub', 'Strapi', 'Supabase']
  },
  {
    title: 'Design & Soft Skills',
    icon: '🎨',
    skills: ['Figma', 'Canva', 'Autonomie', 'Pédagogie', 'Apprentissage rapide']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <span className="section-tag">Stack Technique</span>
            <h2 className="section-title">Compétences clés</h2>
          </div>
        </RevealOnScroll>

        <div className="skills__grid">
          {skillsData.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <SkillCategory {...category} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
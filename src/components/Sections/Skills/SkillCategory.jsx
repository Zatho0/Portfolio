import React from 'react';
import './SkillCategory.css';

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="skill-category">
      <h3 className="skill-category__title">
        <span>{icon}</span>
        {title}
      </h3>
      <div className="skill-category__list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
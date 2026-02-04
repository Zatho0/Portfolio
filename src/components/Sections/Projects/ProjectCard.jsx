import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({
  category,
  title,
  description,
  tech,
  gradient,
  image,
  url
}) => {
  const Wrapper = url ? 'a' : 'article';

  return (
    <Wrapper
      className="project-card"
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
    >
      <div
        className={`project-card__image ${gradient || ''}`}
        style={image ? { backgroundImage: `url(${image})` } : {}}
      >
        {url && <span className="project-card__arrow">→</span>}
      </div>

      <div className="project-card__content">
        <div className="project-card__category">{category}</div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};


export default ProjectCard;
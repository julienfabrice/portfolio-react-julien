const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-tech">
        {tech.split(", ").map((item, index) => (
          <span key={index} className="tech-item">{item}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer" className="btn-github">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer" className="btn-live">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
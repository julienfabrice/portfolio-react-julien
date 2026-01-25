const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>

      <p className="tech">
        <strong>Stack :</strong> {tech}
      </p>

      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

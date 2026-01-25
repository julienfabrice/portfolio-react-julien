import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Mes Projets</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Job Board React"
          description="Job board moderne avec React Router, pages dynamiques et Dark Mode."
          tech="React, React Router, CSS"
          github="https://github.com/julienfabrice Portfolio"
          live="https://cute-faun-069892.netlify.app"
        />

        <ProjectCard
          title="Portfolio React"
          description="Portfolio personnel pour présenter mes projets et compétences."
          tech="React, CSS"
          github="https://github.com/julienfabrice Portfolio"
          live="https://cute-faun-069892.netlify.app"
        />
      </div>
    </section>
  );
};

export default Projects;

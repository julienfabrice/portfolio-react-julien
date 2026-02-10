import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="page-container projects-page">
      <h1>Mes Projets</h1>
      <p className="projects-intro">
        Quelques projets réalisés avec React pour pratiquer des applications modernes et dynamiques.
      </p>

      <div className="projects-grid">
        <ProjectCard
          title="Job Board React"
          description="Job board moderne avec React Router, pages dynamiques et Dark Mode."
          tech="React, React Router, CSS"
          github="https://github.com/julienfabrice/react-job-board"
          live="https://rad-kheer-765d0e.netlify.app"
        />

        <ProjectCard
          title="Portfolio React"
          description="Portfolio personnel pour présenter mes projets et compétences."
          tech="React, CSS"
          github="https://github.com/julienfabrice/react-job-board"
          live="https://cute-faun-069892.netlify.app"
        />

        {/* Nouveau projet TodoApp */}
        <ProjectCard
          title="Todo App"
          description="Application de gestion de tâches avec filtres et compteurs."
          tech="React, CSS, LocalStorage"
          github="https://github.com/julienfabrice/react-todo-app"  // si tu as un repo GitHub
          live="/todo"  // lien vers la page Todo dans ton portfolio
        />
      </div>
    </div>
  );
};

export default Projects;
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="page-container projects-page">
      <h1>Mes Projets</h1>
      <p className="projects-intro">
        Une sélection de projets illustrant mon travail en développement web full-stack : interfaces React modernes, applications Node.js/Express connectées à des bases de données, et outils sur mesure pour des besoins concrets.
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
          github="https://github.com/julienfabrice/portfolio-react-julien"
          live="https://cute-faun-069892.netlify.app"
        />

        <ProjectCard
          title="Todo App"
          description="Application de gestion de tâches avec filtres et compteurs."
          tech="React, CSS, LocalStorage"
          github="https://github.com/julienfabrice/react-todo-app"
          live="/todo"
        />

        <ProjectCard
          title="Habitat 100K"
          description="Prototype interactif pour un projet de 100 000 logements sociaux basé sur la technologie de blocs de terre comprimée (BTC-A), avec simulateur et présentation du modèle économique."
          tech="React, TypeScript, CSS"
          github="https://github.com/julienfabrice/habitat100k-react"
          live="https://habitat100k-react.netlify.app"
        />

        <ProjectCard
          title="Kobo Dashboard"
          description="Dashboard de suivi de données terrain connecté à KoboToolbox. Synchronise et centralise les soumissions de formulaires agricoles (projets RENFORT et e-AgriSouk), avec visualisation dynamique par graphiques et tableaux."
          tech="Node.js, Express, MySQL, Chart.js"
          github="https://github.com/julienfabrice/kobo-dashboard"
          live="https://kobo-dashboard-production-bcbd.up.railway.app"
        />

        <ProjectCard
          title="EAJ Finance Dashboard"
          description="Dashboard de gestion financière pour l'Agence Emploi Jeunes (Côte d'Ivoire), avec suivi des indicateurs et visualisation des données budgétaires."
          tech="Next.js, TypeScript, Laravel"
          github="https://github.com/julienfabrice/aej-finance-dashboard"
          live="https://aej-finance-dashboard.netlify.app"
        />
        
         <ProjectCard
          title="Survey Solutions Dashboard"
          description="Dashboard affichant automatiquement les formulaires soumis sur un serveur Survey Solutions, avec colonnes déduites dynamiquement de la structure de chaque questionnaire."
          tech="FastAPI, React, Vite, MySQL"
          github="https://github.com/julienfabrice/survey-solutions-dashboard"
          live="https://cool-praline-48269f.netlify.app"
        />

      </div>
    </div>
  );
};

export default Projects;
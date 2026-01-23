import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio React",
      description: "Portfolio personnel développé avec React.",
      github: "https://github.com/julienfabrice/portfolio-react-julien",
    },
    {
      title: "BilmaFood",
      description: "Application web de commande de nourriture.",
      github: "https://github.com/julienfabrice/Bilmafood",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mes Projets</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  style={{
    display: "inline-block",
    marginTop: "10px",
    color: "#0f172a",
    fontWeight: "600",
  }}
>
  🔗 Voir sur GitHub
</a>


        </div>
      ))}
    </div>
  );
}


export default Projects;
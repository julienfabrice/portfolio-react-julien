import React from "react";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Maintenance informatique",
    "Installation de systèmes (Windows, Linux)",
    "Dépannage matériel et logiciel",
    "Git & GitHub",
  ];

  return (
    <div className="container">
      <h1>Mes Compétences</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

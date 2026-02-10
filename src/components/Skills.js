import React from "react";
import "./Skills.css"; // CSS dédié à cette page

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "TailWind",
    "Maintenance informatique",
    "Installation de systèmes (Windows, Linux)",
    "Dépannage matériel et logiciel",
    "Git & GitHub",
  ];

  return (
    <div className="skills-page">
      <div className="skills-card">
        <h1 className="skills-title">Mes Compétences</h1>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span className="bullet">•</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
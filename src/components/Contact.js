import React from "react";
import "../styles/contact.css"; // fichier CSS dédié

function Contact() {
  return (
    <section className="contact-page">
      <div className="page-container contact-card">
        <h1>Contact</h1>

        <p>
          Vous pouvez me contacter via les moyens suivants :
        </p>

        <ul>
          <li>
            📧 Email :{" "}
            <a href="mailto:julienfabrice@gmail.com" className="contact-link">
              menoa.julien@gmail.com
            </a>
          </li>

          <li>
            💻 GitHub :{" "}
            <a
              href="https://github.com/julienfabrice"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              https://github.com/julienfabrice
            </a>
          </li>

          <li>
            📄 CV :{" "}
            <a
              href="/CV Julien Fabrice Menoa Ondobo.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Télécharger mon CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
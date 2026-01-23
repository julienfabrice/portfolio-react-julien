import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>

      <p>
        Vous pouvez me contacter via les moyens suivants :
      </p>

      <ul>
        <li>
          📧 Email :{" "}
          <a href="mailto:julienfabrice@gmail.com">
            menoa.julien@gmail.com
          </a>
        </li>

        <li>
          💻 GitHub :{" "}
          <a
            href="https://github.com/julienfabrice"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/julienfabrice
          </a>
        </li>
        <li>
  📄 CV :
  <a href="/CV Julien Fabrice Menoa Ondobo.pdf" target="_blank" rel="noreferrer">
    Télécharger mon CV
  </a>
</li>

      </ul>
    </div>
  );
}

export default Contact;

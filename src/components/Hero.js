import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        {/* GRAND TITRE */}
        <h1>Je suis développeur Fullstack & Administrateur Systèmes</h1>

        {/* PARAGRAPHES */}
        <p>
          Développeur fullstack et administrateur systèmes, titulaire d'une
          licence en informatique. Je conçois et déploie des applications web
          modernes de bout en bout, de l'interface utilisateur jusqu'à
          l'infrastructure serveur, et j'assure la maintenance des systèmes
          et réseaux qui les font tourner.
        </p>

        <p>
          Je maîtrise React.js, Next.js et TypeScript pour le frontend, ainsi
          que PHP/Laravel et Node.js/Express pour le backend. Je travaille
          avec des bases de données relationnelles comme MySQL et PostgreSQL,
          et je gère le déploiement et l'administration de serveurs VPS
          (Nginx, PM2, gestion de processus). J'utilise Git au quotidien pour
          la gestion de versions et le travail en équipe.
        </p>

        <p>
          Je mets aussi cette expertise au service de la formation, avec
          plusieurs années d'expérience dans l'enseignement de l'informatique
          au secondaire. Aujourd'hui, je suis à la recherche d'opportunités
          professionnelles (emploi ou missions freelance) me permettant de
          contribuer à des projets ambitieux, tout en continuant à apprendre
          et à évoluer.
        </p>

        {/* BOUTON BLEU CENTRÉ */}
        <Link to="/projects" className="button hero-btn">
          Voir mes projets
        </Link>
      </div>
    </section>
  );
}

export default Hero;
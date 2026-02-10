import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        {/* GRAND TITRE */}
        <h1>Je suis développeur React</h1>

        {/* PARAGRAPHES */}
        <p>
          Je suis développeur d’applications et technicien en maintenance
          informatique, titulaire d’une licence en informatique. Passionné par
          les technologies du web et les systèmes informatiques, je conçois des
          applications web modernes et je réalise également des opérations de
          maintenance matérielle et logicielle.
        </p>

        <p>
          J’ai de solides compétences en développement web, notamment en HTML,
          CSS, JavaScript et React.js. Je maîtrise aussi l’installation, la
          configuration et le dépannage des ordinateurs, ainsi que l’assistance
          aux utilisateurs.
        </p>

        <p>
          Aujourd’hui, je suis à la recherche d’opportunités professionnelles
          (emploi ou missions freelance) me permettant de mettre mes compétences
          au service de projets concrets, tout en continuant à apprendre et à
          évoluer dans le domaine de l’informatique.
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
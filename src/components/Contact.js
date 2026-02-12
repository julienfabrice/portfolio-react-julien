import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");

    emailjs
      .sendForm(
        "service_cdjjy7n",   // Remplace par ton Service ID EmailJS
        "template_4oy77mm",  // Remplace par ton Template ID EmailJS
        form.current,
        "rVGFvaKp-PX4mC6Pk"    // Remplace par ta Public Key EmailJS
      )
      .then(
        (result) => {
          setLoading(false);
          setMessageStatus("Votre message a été envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessageStatus(
            "Une erreur est survenue. Veuillez réessayer plus tard."
          );
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Contactez-moi</h1>
      <p>Remplissez le formulaire ci-dessous pour m’envoyer un message</p>

      <div className="contact-container">
        {/* Formulaire */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>
            Nom
            <input type="text" name="from_name" required />
          </label>

          <label>
            Email
            <input type="email" name="from_email" required />
          </label>

          <label>
            Message
            <textarea name="message" required />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {messageStatus && <p className="status-message">{messageStatus}</p>}
        </form>

        {/* Infos directes */}
        <div className="contact-info">
          <h3>Mes coordonnées</h3>
          <p><strong>Nom :</strong> Julien Fabrice Menoa</p>
          <p><strong>Titre :</strong> Développeur React</p>
          <p><strong>Telephone :</strong> +237 697733236</p>
          <p><strong>Email :</strong> <a href="mailto:julien@example.com">menoa.julien@gmail.com</a></p>
          <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/julien-fabrice-menoa-4a1571349" target="_blank" rel="noreferrer">linkedin.com/Julien Fabrice Menoa</a></p>
        </div>
      </div>
    </div>
  );
}
import React, {useContext} from "react";
import "./Contact.css";
import { LanguageContext } from '../contexts/LanguageContext';
import {
  FaArrowRight,
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  // const { languageData } = useLanguage();

  const { languageData } = useContext(LanguageContext);

  return (
    <section id="contact">
      <h1 className="title">
        {languageData.contactTitle}<span className="title-underline">_</span>
      </h1>
      <p className="subtitle">{languageData.contactSubtitle}</p>
      <div className="contact-div">
        <div className="contact-card">
          <FaDiscord className="contact-icon" size={50} />
          <h4 className="contact-card-title">Discord</h4>
          <p className="contact-card-data">jessica.santosb</p>
          <a
            className="contact-card-link"
            href="https://discordapp.com/users/908783512662974464"
            target="_blank"
          >
            {languageData.contactText} <FaArrowRight />
          </a>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="contact-icon" size={50} />
          <h4 className="contact-card-title">Whatsapp</h4>
          <p className="contact-card-data">+55 31 99738-8500</p>
          <a
            className="contact-card-link"
            href="https://wa.me/5531997388500"
            target="_blank"
          >
            {languageData.contactText} <FaArrowRight />
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" size={50} />
          <h4 className="contact-card-title">Email</h4>
          <p className="contact-card-data">jessica.santosb@outlook.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React, { useContext, useState } from "react";
import "./Contact.css";
import { Parallax } from "react-scroll-parallax";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  FaArrowRight,
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

function Contact() {
  const [copyEmailPopup, setCopyEmailPopup] = useState(false);
  const [copyEmailError, setCopyEmailError] = useState(false);

  const { languageData } = useContext(LanguageContext);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("jessica.santosb@outlook.com");
      setCopyEmailPopup(true);
      setTimeout(() => {
        setCopyEmailPopup(false);
      }, 4000);
    } catch (err) {
      setCopyEmailError(true);
      setTimeout(() => {
        setCopyEmailError(false);
      }, 4000);
    }
  };

  return (
    <section id="contact">
      <h1 className="title">
        {languageData.contactTitle}
        <span className="title-underline">_</span>
      </h1>
      <p className="subtitle">{languageData.contactSubtitle}</p>
      <Parallax opacity={[0, 2]}>
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
          <p className="contact-card-data" onClick={copyToClipboard}>
            jessica.santosb@outlook.com
            <FaCopy size={15} />
          </p>
          <div
            className={`contact-email-bubble ${copyEmailPopup ? "show" : ""}`}
          >
            {languageData.contactBubble}
          </div>
          <div
            className={`contact-email-bubble ${
              copyEmailError ? "show copied-error" : ""
            }`}
          >
            {languageData.contactBubbleError}
          </div>
        </div>
      </div>
      </Parallax>
      
    </section>
  );
}

export default Contact;

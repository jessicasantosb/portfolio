import React, { useContext, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import { TitleTypewriter } from "../../utils/TitleTypewriter";
import { LanguageContext } from "../../contexts/LanguageContext";
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

  const contactRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".contact-card",
      { y: 500, x: 100, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 200",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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
    <section id="contact" ref={contactRef}>
      <div className="fade-in">
        <h1 className="title disable-selection">
          <TitleTypewriter str={languageData.contactTitle} />
        </h1>
        <p className="subtitle disable-selection">
          {languageData.contactSubtitle}
        </p>
      </div>
      <div className="contact-div center">
        <div className="contact-card center">
          <FaDiscord className="contact-icon" />
          <h4 className="contact-card-title">Discord</h4>
          <p className="contact-card-data">jessica.santosb</p>
          <a
            className="contact-card-link center"
            href="https://discordapp.com/users/908783512662974464"
            target="_blank"
          >
            {languageData.contactText} <FaArrowRight />
          </a>
        </div>

        <div className="contact-card center">
          <FaWhatsapp className="contact-icon" />
          <h4 className="contact-card-title">Whatsapp</h4>
          <p className="contact-card-data">+55 31 99738-8500</p>
          <a
            className="contact-card-link center"
            href="https://wa.me/5531997388500"
            target="_blank"
          >
            {languageData.contactText} <FaArrowRight />
          </a>
        </div>

        <div className="contact-card center">
          <FaEnvelope className="contact-icon" />
          <h4 className="contact-card-title">Email</h4>
          <p className="contact-card-data center" onClick={copyToClipboard}>
            jessica.santosb
            <br />
            @outlook.com
            <FaCopy className="contact-icon copy" />
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
    </section>
  );
}

export default Contact;

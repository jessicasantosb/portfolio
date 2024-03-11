import React, { useContext, useEffect, useRef } from "react";
import "./Footer.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageContext } from "../../contexts/LanguageContext";
import ProfilesIcons from "../../utils/profile icons/ProfilesIcons";

function Footer() {
  const { languageData } = useContext(LanguageContext);

  const footerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".footer-link",
      { y: 500, x: 100, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top top",
        },
      }
    );
  }, []);

  return (
    <footer id="footer" className="disable-selection" ref={footerRef}>
      <ul className="footer-links">
        <li>
          <a className="footer-link" href="#hero">
            {languageData.pageSection1}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#about">
            {languageData.pageSection2}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#projects">
            {languageData.pageSection3}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#Contact">
            {languageData.pageSection4}
          </a>
        </li>
      </ul>
      <div className="footer-icons">
        <ProfilesIcons />
      </div>
      <p className="footer-copyright">
        &copy; Jessica Bandeira
        <span className="shadow"></span>
      </p>
    </footer>
  );
}

export default Footer;

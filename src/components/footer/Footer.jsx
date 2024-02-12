import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";
import { LanguageContext } from "../contexts/LanguageContext";
import ProfilesIcons from "../profile icons/ProfilesIcons";

function Footer() {
  const { languageData } = useContext(LanguageContext);

  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".footer-links",
      { x: "-200px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom 600",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".footer-icons",
      { x: "200px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom 600",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".footer-copyright",
      { x: -1000 },
      {
        x: 0,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom 600",
          end: "bottom",
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

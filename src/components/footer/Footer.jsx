import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import "./Footer.css";
import ProfilesIcons from "../profile icons/ProfilesIcons";

function Footer() {
  const { languageData } = useContext(LanguageContext);

  return (
    <footer id="footer">      
      <ul className="footer-links-div">
        <li className="footer-links">
          <a href="#home">{languageData.pageSection1}</a>
        </li>
        <li className="footer-links">
          <a href="#about">{languageData.pageSection2}</a>
        </li>
        <li className="footer-links">
          <a href="#projects">{languageData.pageSection3}</a>
        </li>
        <li className="footer-links">
          <a href="#Contact">{languageData.pageSection4}</a>
        </li>
      </ul>
      <div className="footer-icons">
        <ProfilesIcons />
      </div>
      <p className="footer-copyright">&copy; Jessica Bandeira </p>
    </footer>
  );
}

export default Footer;

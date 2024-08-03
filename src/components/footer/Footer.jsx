import { useContext } from "react";
import "./Footer.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import ProfilesIcons from "../../utils/profile icons/ProfilesIcons";

function Footer() {
  const { languageData } = useContext(LanguageContext);

  return (
    <footer id="footer" className="disable-selection">
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

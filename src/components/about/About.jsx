import { useContext } from "react";
import "./About.css";
import { TitleTypewriter } from "../../utils/TitleTypewriter";
import { LanguageContext } from "../../contexts/LanguageContext";

function About() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="about" className="center">
      <div className="fade-in">
        <h1 className="title disable-selection">
          <TitleTypewriter str={languageData.aboutTitle} />
        </h1>
        <p className="subtitle disable-selection">
          {languageData.aboutSubtitle}
        </p>
      </div>
      <div className="fade-in">
        <p className="about-text">{languageData.aboutText}</p>
      </div>
    </section>
  );
}

export default About;

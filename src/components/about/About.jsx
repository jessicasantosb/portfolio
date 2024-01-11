import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../contexts/LanguageContext";
import Button from "../buttons/Buttons";

function About() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="about">
      <h1 className="title">
        {languageData.aboutTitle}
        <span className="title-underline">_</span>
      </h1>
      <p className="subtitle">{languageData.aboutSubtitle}</p>
      <div className="about-div">
        <p className="about-text">{languageData.aboutText}</p>
      </div>
      <div className="about-btn-div">
        <Button
          name={"curriculum"}
          text={languageData.buttonCurriculum}
        />
      </div>
    </section>
  );
}

export default About;

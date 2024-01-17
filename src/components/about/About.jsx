import React, { useContext } from "react";
import "./About.css";
import { Parallax } from "react-scroll-parallax";
import { LanguageContext } from "../contexts/LanguageContext";
import Button from "../buttons/Buttons";

function About() {
  const { languageData } = useContext(LanguageContext);

  return (
    <Parallax translateX={[-100, 100]} opacity={[2,0]}>
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
    </Parallax>
    
  );
}

export default About;

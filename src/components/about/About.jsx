import React, { useContext } from "react";
import "./About.css";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "../contexts/LanguageContext";
import Button from "../buttons/Buttons";

function About() {
  const { languageData } = useContext(LanguageContext);

  return (
      <section id="about" className="center">
      <h1 className="title disable-selection">
      <Typewriter
              options={{
                strings: [languageData.aboutTitle],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 5000,
                cursor: '_',
                cursorClassName: "title-underline",
              }}
            />
      </h1>
      <p className="subtitle disable-selection">{languageData.aboutSubtitle}</p>
      <div className="about-div">
        <p className="about-text">{languageData.aboutText}</p>
        <Button
        className="btn-curriculum"
          name={"curriculum"}
          text={languageData.buttonCurriculum}
        />
      </div>
    </section>    
  );
}

export default About;

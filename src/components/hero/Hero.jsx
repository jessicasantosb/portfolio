import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { HomeTitleTypewriter } from "../TitleTypewriter";
import avatar from "../../images/avatar.png";
import ProfilesIcons from "../profile icons/ProfilesIcons";
import Button from "../buttons/Buttons";

function Hero() {
  const { languageData } = useContext(LanguageContext);

  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".title",
      { y: "300px", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5 }
    );

    gsap.fromTo(
      ".btn-curriculum",
      { y: "50px", opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8 }
    );

    gsap.fromTo(
      ".hero-icons",
      { y: "50px", opacity: 0 },
      { y: 0, opacity: 1, delay: 1.2 }
    );
  }, []);

  return (
    <section id="hero" className="center disable-selection" ref={heroRef}>
      <main className="hero-main">
        <h1 className="title">
          <span className="gretting">{languageData.homeTitleGretting}</span>{" "}
          <span>
            <HomeTitleTypewriter />
          </span>
        </h1>
        <Button
          className="btn-curriculum"
          name={"curriculum"}
          text={languageData.buttonCurriculum}
        />
        <div className="hero-icons">
          <ProfilesIcons />
        </div>
        <div className="hero-img-box">
        <svg className="hero-svg " viewBox="0 0 190 180" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M37.7,-67.5C48.8,-58.9,57.7,-48.7,58.1,-37.1C58.5,-25.6,50.6,-12.8,51,0.3C51.5,13.4,60.5,26.7,61.6,40.9C62.6,55,55.8,69.9,44.2,78.5C32.6,87.2,16.3,89.5,-0.2,89.8C-16.7,90.1,-33.3,88.4,-43.4,78.9C-53.5,69.4,-57,52.2,-65.3,37.7C-73.6,23.3,-86.6,11.7,-85.9,0.4C-85.2,-10.8,-70.8,-21.7,-57.4,-27.3C-44,-32.9,-31.7,-33.3,-22.3,-42.8C-13,-52.4,-6.5,-71,3.4,-77C13.3,-82.9,26.6,-76,37.7,-67.5Z" transform="translate(110 100) scale(1.2)" />
</svg>

          {/* <svg
            className="hero-svg "
            viewBox="0 0 170 170"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.6,-57C61.2,-44.1,56.2,-22,54.1,-2.1C52,17.8,52.7,35.6,44.1,45.6C35.6,55.6,17.8,57.9,-1.9,59.7C-21.6,61.6,-43.1,63.1,-58.8,53.1C-74.6,43.1,-84.5,21.6,-79.1,5.3C-73.8,-10.9,-53.2,-21.7,-37.4,-34.6C-21.7,-47.6,-10.9,-62.5,5.6,-68.1C22,-73.7,44.1,-69.9,52.6,-57Z"
              transform="translate(100 100) scale(1.2)"
            />
          </svg> */}
          <img className="hero-avatar" src={avatar} alt="picture" />
        </div>
      </main>
    </section>
  );
}

export default Hero;

import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import "./Hero.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { HomeTitleTypewriter } from "../../utils/TitleTypewriter";
import avatar from "../../assets/avatar.png";
import ProfilesIcons from "../../utils/profile icons/ProfilesIcons";
import { ButtonResume } from "../../utils/buttons/Buttons";

function Hero() {
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    gsap.fromTo(
      ".title",
      { y: "300px", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5 }
    );

    gsap.fromTo(
      ".btn.resume",
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
    <section id="hero" className="center disable-selection">
      <main className="hero-main">
        <div>
          <h1 className="title">
            <span className="gretting">{languageData.homeTitleGretting}</span>{" "}
            <span>
              <HomeTitleTypewriter />
            </span>
          </h1>
          <ButtonResume
            className="btn-resume"
            text={languageData.buttonResume}
          />
        </div>
        <div className="hero-icons">
          <ProfilesIcons />
        </div>
        <div className="hero-img-box">
          <svg
            className="hero-svg "
            viewBox="0 0 190 180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M37.7,-67.5C48.8,-58.9,57.7,-48.7,58.1,-37.1C58.5,-25.6,50.6,-12.8,51,0.3C51.5,13.4,60.5,26.7,61.6,40.9C62.6,55,55.8,69.9,44.2,78.5C32.6,87.2,16.3,89.5,-0.2,89.8C-16.7,90.1,-33.3,88.4,-43.4,78.9C-53.5,69.4,-57,52.2,-65.3,37.7C-73.6,23.3,-86.6,11.7,-85.9,0.4C-85.2,-10.8,-70.8,-21.7,-57.4,-27.3C-44,-32.9,-31.7,-33.3,-22.3,-42.8C-13,-52.4,-6.5,-71,3.4,-77C13.3,-82.9,26.6,-76,37.7,-67.5Z"
              transform="translate(110 100) scale(1.2)"
            />
          </svg>
          <img className="hero-avatar" src={avatar} alt="picture" />
        </div>
      </main>
    </section>
  );
}

export default Hero;

import React, { useContext } from "react";
import "./Home.css";
import { FaCode } from "react-icons/fa";
import { LanguageContext } from "../contexts/LanguageContext";
import {HomeTitleTypewriter} from "../TitleTypewriter";
import ThemeToggle from "../toggle theme/ThemeToggle";
import LanguageToggle from "../toggle language/ToggleLanguageBtn";
import avatar from "../../images/avatar.png";
import ProfilesIcons from "../profile icons/ProfilesIcons";
import Button from "../buttons/Buttons";

function Home() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="home" className="center">
      {/* background */}
      <div className="background">
        {/* wave */}
        <div className="background-shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/* container */}
      <div className="home-grid">
        <div className="home-icons">
          <ProfilesIcons />
        </div>
        <div className="home-main">
          <h1 className="title disable-selection">
            {languageData.homeTitleGretting}
            <br />
            <HomeTitleTypewriter />
          </h1>
          <LanguageToggle className="language-toggle" />
          <Button
            className="btn-telegram"
            name={"telegram"}
            text={languageData.buttonTelegram}
          />
        </div>
        <div className="home-img-div">
          <ThemeToggle />
          <img className="home-avatar disable-selection" src={avatar} alt="picture" />
        </div>
        {/* home link to scroll down */}
        <a href="#about" className="home-scrollDown">
          <div className="mouse">
            <div className="scroller"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;

import React, { useContext } from "react";
import "./Home.css";
import { FaCode, FaArrowDown } from "react-icons/fa";
import { LanguageContext } from "../contexts/LanguageContext";
import ThemeToggle from "../toggle theme/ThemeToggle";
import LanguageToggle from "../toggle language/ToggleLanguageBtn";
import avatar from "../../images/avatar.png";
import ProfilesIcons from "../profile icons/ProfilesIcons";
import Button from "../buttons/Buttons";

function Home() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="home">
      <div className="home-grid">
        <div className="home-icons">
          <ProfilesIcons />
        </div>
        <div className="home-main">
          <h1 className="title">
            {languageData.homeTitleGretting}
            <br />
            {languageData.homeTitle}
          </h1>
          <h4 className="subtitle">
            <FaCode className="code-icon" size={30} />
            {languageData.homeSubtitle}
          </h4>
          <LanguageToggle className="language-toggle" />
          <div>
            <Button name={"telegram"} text={languageData.buttonTelegram} />
          </div>
        </div>
        <div className="home-picture">
          <ThemeToggle />
          <img className="home-avatar" src={avatar} alt="picture" />
        </div>
        <div className="home-scrow-div">
          <a className="scrow-down-link" href="#about">
            <FaArrowDown className="scrow-down-icon" />
            scrow down
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

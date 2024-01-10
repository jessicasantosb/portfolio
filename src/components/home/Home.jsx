import React, {useContext} from "react";
import "./Home.css";
import { FaCode, FaArrowDown } from "react-icons/fa";
import { LanguageContext } from "../contexts/LanguageContext";
import ThemeToggle from "../toggle theme/ThemeToggle";
import LanguageToggle from "../toggle language/ToggleLanguageBtn";
import avatar from "../../images/avatar.png";
import ProfilesIcons from "../profile icons/ProfilesIcons";
import Button from "../buttons/Buttons";

function Home() {
  // const { languageData } = useLanguage();

  const { languageData } = useContext(LanguageContext);

  return (
    <section id="home">
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
          <FaCode className="code-icon" />
          {languageData.homeSubtitle}
        </h4>
        <LanguageToggle className="language-toggle" />
        <Button name={"telegram"} text={languageData.buttonTelegram} />
      </div>
      <div className="home-picture">
        <ThemeToggle />
        <img className="home-avatar" src={avatar} alt="picture" />
      </div>
      <div className="home-scrow-div">
        <a href="#about">
          {languageData.homeScrool}
          <FaArrowDown className="arrow-icon" />
        </a>
      </div>
    </section>
  );
}

export default Home;

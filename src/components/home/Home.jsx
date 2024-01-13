import React, { useContext, useState } from "react";
import "./Home.css";
import { FaCode, FaArrowUp } from "react-icons/fa";
import { LanguageContext } from "../contexts/LanguageContext";
import ThemeToggle from "../toggle theme/ThemeToggle";
import LanguageToggle from "../toggle language/ToggleLanguageBtn";
import avatar from "../../images/avatar.png";
import ProfilesIcons from "../profile icons/ProfilesIcons";
import Button from "../buttons/Buttons";

function Home() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const { languageData } = useContext(LanguageContext);

  const btnScrollTopVisible = () => {
    const scrolled = document.documentElement.scrollTop
    const width = window.screen.width

    if (scrolled > 300 && width <= 800){ 
      setIsScrollTopVisible(true) 
    }  
    else if (scrolled <= 300 || width > 800){ 
      setIsScrollTopVisible(false)
    }
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', btnScrollTopVisible); 

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
        <a href="#about" class="home-scrollDown">
          <div class="mouse">
            <div class="scroller"></div>
          </div>
        </a>
        <button className={`home-scrollTop ${isScrollTopVisible ? "scrollTopVisible" : ""}`} onClick={scrollToTop}>
          <FaArrowUp className="scrow-top-icon" />
        </button>
      </div>
    </section>
  );
}

export default Home;

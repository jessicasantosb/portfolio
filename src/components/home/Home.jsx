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
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const { languageData } = useContext(LanguageContext);

  // set scroll to top button visible
  const btnScrollTopVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const width = window.screen.width;

    if (scrolled > 300 && width <= 800) {
      setIsScrollTopVisible(true);
    } else if (scrolled <= 300 || width > 800) {
      setIsScrollTopVisible(false);
    }
  };

  window.addEventListener("scroll", btnScrollTopVisible);

  // set scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="home">
      {/* background */}
      <div class="background">
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
          <h1 className="title" >
            {languageData.homeTitleGretting}
            <br />
            {languageData.homeTitle}
          </h1>
          <h4 className="subtitle">
            <FaCode className="code-icon" size={30} />
            {languageData.homeSubtitle}
          </h4>
          <LanguageToggle className="language-toggle" />
          <Button
            className="btn-telegram"
            name={"telegram"}
            text={languageData.buttonTelegram}
          />
        </div>
        <div className="home-picture">
          <ThemeToggle />
          <img className="home-avatar" src={avatar} alt="picture" />
        </div>
        {/* home link to scroll down */}
        <a href="#about" className="home-scrollDown">
          <div className="mouse">
            <div className="scroller"></div>
          </div>
        </a>
        {/* button to scroll top when mobile */}
        <button
          className={`home-scrollTop ${
            isScrollTopVisible ? "scrollTopVisible" : ""
          }`}
          onClick={scrollToTop}
        >
          <FaArrowUp className="scrow-top-icon" />
        </button>
      </div>
    </section>
  );
}

export default Home;

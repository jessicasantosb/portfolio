import { useState, useEffect, useContext } from "react";
import { gsap } from "gsap";
import "./Header.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import ThemeToggle from "../../utils/toggle theme/ThemeToggle";
import LanguageToggle from "../../utils/toggle language/ToggleLanguageBtn";
import Logo from "../../utils/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const { languageData } = useContext(LanguageContext);

  // responsive navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    const handleLinkClick = () => {
      setIsOpen(false);
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  // scroll bar
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // logo animation
  useEffect(() => {
    var h = window.innerHeight / 2;
    var w = window.innerWidth / 2;

    gsap.fromTo(".logo", { y: h, x: w, scale: 0 }, { y: 0,x: 0, scale: 1, duration: 2 });
  }, []);

  return (
    <header id='header'>
      <nav className='navbar'>
        <div
          className={`hamburger ${isOpen ? 'opened' : ''}`}
          onClick={toggleMenu}
        >
          <svg width='40' height='40' viewBox='0 0 100 100'>
            <path
              className='line line1'
              d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
            />
            <path className='line line2' d='M 20,50 H 80' />
            <path
              className='line line3'
              d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
            />
          </svg>
        </div>
        <Logo className='logo' />
        <div className={`nav-links center ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a className='nav-link' href='#hero'>
                {languageData.pageSection1}
              </a>
            </li>
            <li>
              <a className='nav-link' href='#about'>
                {languageData.pageSection2}
              </a>
            </li>
            <li>
              <a className='nav-link' href='#projects'>
                {languageData.pageSection3}
              </a>
            </li>
            <li>
              <a className='nav-link' href='#contact'>
                {languageData.pageSection4}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <LanguageToggle className='nav-link' />
            </li>
            <li>
              <ThemeToggle className='nav-link' />
            </li>
          </ul>
        </div>
      </nav>
      <div className='progressMainWrapper'>
        <div
          className='progressMainStyle'
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;

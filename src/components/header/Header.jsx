import { useState, useEffect, useContext } from "react";
import "./Header.css";
import { LanguageContext } from '../contexts/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const { languageData } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".nav-links a");

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

  return (
    <header id="header">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="navbar">
        <h3 className="logo">Jessica</h3>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">{languageData.pageSection1}</a>
          </li>
          <li>
            <a href="#about">{languageData.pageSection2}</a>
          </li>
          <li>
            <a href="#projects">{languageData.pageSection3}</a>
          </li>
          <li>
            <a href="#contact">{languageData.pageSection4}</a>
          </li>
        </ul>
      </div>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;

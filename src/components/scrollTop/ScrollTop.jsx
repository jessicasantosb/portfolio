import React, { useState } from "react";
import "./ScrollTop.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

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
    <button
      className={`scrollTop ${isScrollTopVisible ? "scrollTopVisible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scrow-top-icon" />
    </button>
  );
}

export default ScrollTop;

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ToggleThemeBtn.css";

export default function ToggleBtn(props) {
   const link = document.querySelector("link[rel='icon']")

   props.isDark ?
    link.setAttribute("href", "./src/assets/favicon-dark-theme.png") 
    : link.setAttribute("href", "./src/assets/favicon-light-theme.png")
   
    return (
      <div>
        {props.isDark ? (
          <FaSun className="moon-icon" size={30} onClick={props.toggleDark} />
        ) : (
          <FaMoon className="sun-icon" size={30} onClick={props.toggleDark} />
        )}
      </div>
    );
  }

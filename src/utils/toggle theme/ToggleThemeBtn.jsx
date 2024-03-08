import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ToggleThemeBtn.css";

export default function ToggleBtn(props) {
   const link = document.querySelector("link[rel='icon']")

   props.isDark ?
    link.setAttribute("href", "./darkFavicon.ico") 
    : link.setAttribute("href", "./lightFavicon.ico")
   
    return (
      <div>
        {props.isDark ? (
          <FaSun className="moon-icon" onClick={props.toggleDark} />
        ) : (
          <FaMoon className="sun-icon" onClick={props.toggleDark} />
        )}
      </div>
    );
  }

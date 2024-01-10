import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ToggleThemeBtn.css";

export default function ToggleBtn(props) {
    return (
      <div>
        {props.isDark ? (
          <FaMoon className="sun-icon" size={30} onClick={props.toggleDark} />
        ) : (
          <FaSun className="moon-icon" size={30} onClick={props.toggleDark} />
        )}
      </div>
    );
  }

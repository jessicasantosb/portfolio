import React, { useState, useEffect } from "react";
import { ThemeContext, Themes } from "./ThemeContext";

export default function ThemeContextWrapper(props) {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme ? savedTheme : Themes.light);

  const changeTheme = (theme) => {
    setTheme(theme);
    setThemeInStorage(theme);
  };

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    switch (theme) {
      case Themes.light:
        document.body.classList.add("light-theme");
        break;
      case Themes.dark:
        document.body.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

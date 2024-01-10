import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./ToggleLanguageBtn.css";

function ToggleLanguageBtn() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleToggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
  };

  return (
    <div className="language-btn-div">
      <button
        className={`language-btn ${language === "pt" ? "isActive" : ""}`}
        onClick={handleToggleLanguage}
      >
        PT
      </button>
      <button
        className={`language-btn ${language === "en" ? "isActive" : ""}`}
        onClick={handleToggleLanguage}
      >
        EN
      </button>
    </div>
  );
}

export default ToggleLanguageBtn;

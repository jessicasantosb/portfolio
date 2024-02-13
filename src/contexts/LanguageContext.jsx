import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getLanguage = () => {
    const language = localStorage.getItem("language");
    if (!language) {
      localStorage.setItem("language", "pt");
      return "pt";
    } else {
      return language;
    }
  };

  const [language, setLanguage] = useState(getLanguage());
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    fetchLanguageData();
    localStorage.setItem("language", language);
  }, [language]);

  const fetchLanguageData = () => {
    const dataUrl = `/locales/${language}.json`;

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error("Error fetching language data:", error));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

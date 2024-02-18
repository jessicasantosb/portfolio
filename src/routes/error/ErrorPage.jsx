import React, { useContext } from "react";
import "./ErrorPage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ButtonBack } from "../../utils/buttons/Buttons";

function ErrorPage() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div id="error">
      <main className="error-container">
        <div className="error-title">
          40 <p>4</p>
        </div>
        <h2 className="error-subtitle">Not Found</h2>
        <ButtonBack text={languageData.buttonBack} />
      </main>
    </div>
  );
}

export default ErrorPage;

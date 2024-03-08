import React, { useContext } from "react";
import { jsPDF as JsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./Resume.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { LanguageContext } from "../../contexts/LanguageContext";
import LanguageToggle from "../../utils/toggle language/ToggleLanguageBtn";
import ThemeToggle from "../../utils/toggle theme/ThemeToggle";
import { ButtonDownload, ButtonBack } from "../../utils/buttons/Buttons";

function Resume() {
  const { languageData } = useContext(LanguageContext);

  const generatePDF = () => {
    const htmlSource = document.querySelector(".resume-container");
    const filename = "Jessica_Bandeira_Frontend";

    if (!htmlSource) {
      return;
    }

    html2canvas(htmlSource).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 180;
      const pageHeight = 350;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 5;
      const pdf = new JsPDF("p", "mm");

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    });
  };

  return (
    <section id="resume" className="disable-selection">
      <nav className="resume-navbar center">
          <ButtonBack text={languageData.buttonBack} />
        <div>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <ButtonDownload
          text={languageData.buttonDownload}
          handleBtnDownloadClick={() => generatePDF()}
        />
      </nav>

      <div className="resume-container">
        {/* header */}
        <header className="resume-header">
          <h1 className="resume-name">{languageData.resumeTitle}</h1>
          <strong>{languageData.resumeSubtitle}</strong>
        </header>

        <main className="resume-main">
          {/* sumary */}
          <div className="resume-sumary">
            <strong className="resume-title">
              {languageData.resumeSumaryTitle}
            </strong>
            <p>{languageData.resumeSumary}</p>
          </div>

          {/* experience */}
          <div className="resume-experience">
            <strong className="resume-title">
              {languageData.resumeExperienceTitle}
            </strong>
            <ul>
              <li>
                <strong>{languageData.resumeExperienceDescription}</strong>
                <p>{languageData.resumeExperienceDate}</p>
                <p>{languageData.resumeExperienceLocation}</p>
              </li>
            </ul>
          </div>

          {/* education */}
          <div className="resume-education">
            <strong className="resume-title">
              {languageData.resumeEducationTitle}
            </strong>
            <ul>
              <li>
                <strong>{languageData.resumeEducation1Description}</strong>
                <p>{languageData.resumeEducation1Date}</p>
                <p>{languageData.resumeEducation1Location}</p>
              </li>
              <li>
                <strong>{languageData.resumeEducation2Description}</strong>
                <p>{languageData.resumeEducation2Date}</p>
                <p>{languageData.resumeEducation2Location}</p>
              </li>
              <li>
                <strong>{languageData.resumeEducation3Description}</strong>
                <p>{languageData.resumeEducation3Date}</p>
                <p>{languageData.resumeEducation3Location}</p>
              </li>
            </ul>
          </div>
        </main>

        {/* aside */}
        <aside className="resume-aside">
          <div className="resume-contact">
            <strong className="resume-title">
              {languageData.resumeContactTitle}
            </strong>
            <ul>
              <li>
                <FaLinkedin /> {languageData.resumeContactLinkedIn}
              </li>
              <li>
                <FaGithub /> {languageData.resumeContactGithub}
              </li>
              <li>
                <FaWhatsapp /> {languageData.resumeContactNumber}
              </li>
              <li>{languageData.resumeContactEmail}</li>
              <li> {languageData.resumeContactLocation}</li>
            </ul>
          </div>

          <div className="resume-skills">
            <strong className="resume-title">
              {languageData.resumeSkillsTitle}
            </strong>
            <ul>
              <strong>{languageData.resumeSkillsSubtitle1}</strong>
              <li>{languageData.resumeTechnicalSkill1}</li>
              <li>{languageData.resumeTechnicalSkill2}</li>
              <li>{languageData.resumeTechnicalSkill3}</li>
            </ul>
            <ul>
              <strong>{languageData.resumeSkillsSubtitle2}</strong>
              <li>{languageData.resumeSoftSkill1}</li>
              <li>{languageData.resumeSoftSkill2}</li>
              <li>{languageData.resumeSoftSkill3}</li>
            </ul>
          </div>

          <div className="resume-languages">
            <strong className="resume-title">
              {languageData.resumeLanguagesTitle}
            </strong>
            <ul>
              <li>{languageData.resumeLanguage1}</li>
              <li>{languageData.resumeLanguage2}</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Resume;

import React, { useContext } from "react";
import "./ProjectsItems.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import calculator from "../../images/calculator.png";
import sigin from "../../images/sign-in.png";
import weather from "../../images/weather.png";
import readmeBooks from "../../images/readme.books.png";
import toDo from "../../images/todo.png";

function ProjectsItems({ projectName }) {
  const { languageData } = useContext(LanguageContext);

  if (projectName === "Calculator") {
    return (
      <div className="project-item">
        <img className="project-img" src={calculator} alt="calculator" />
        <div>
          <h2 className="project-item-title">
            {languageData.projectItemTitle1}
          </h2>
          <ul className="tags">
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="project-link-icon" />
            {languageData.projectItemLink1}
          </a>
          <a
            className="project-link"
            href="https://jessicasantosb.github.io/calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-link-icon" />
            {languageData.projectItemLink2}
          </a>
        </div>
      </div>
    );
  }

  if (projectName === "SignIn") {
    return (
      <div className="project-item">
        <img className="project-img" src={sigin} alt="sigin" />
        <div>
          <h2 className="project-item-title">
            {languageData.projectItemTitle2}
          </h2>
          <ul className="tags">
            <li className="tag javascript">javascript</li>
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
            <li className="tag backend">backend</li>
            <li className="tag nodejs">nodejs</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="project-link-icon" />
            {languageData.projectItemLink1}
          </a>
          <a
            className="project-link"
            href="https://landingpage-p8g0.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-link-icon" />
            {languageData.projectItemLink2}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "Weather") {
    return (
      <div className="project-item">
        <img className="project-img" src={weather} alt="weather" />
        <div>
          <h2 className="project-item-title">
            {languageData.projectItemTitle3}
          </h2>
          <ul className="tags">
            <li className="tag react">react</li>
            <li className="tag javascript">javascript</li>
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="project-link-icon" />
            {languageData.projectItemLink1}
          </a>
          <a
            className="project-link"
            href="https://jessicasantosb.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-link-icon" />
            {languageData.projectItemLink2}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "ReadmeBooks") {
    return (
      <div className="project-item">
        <img className="project-img" src={readmeBooks} alt="readme.books" />
        <div>
          <h2 className="project-item-title">
            {languageData.projectItemTitle4}
          </h2>
          <ul className="tags">
            <li className="tag react">react</li>
            <li className="tag javascript">javascript</li>
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
            <li className="tag backend">backend</li>
            <li className="tag nodejs">nodejs</li>
            <li className="tag mongodb">mongodb</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/readme.book"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="project-link-icon" />
            {languageData.projectItemLink1}
          </a>
          <a
            className="project-link"
            href="https://readmebooks.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-link-icon" />
            {languageData.projectItemLink2}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "ToDo") {
    return (
      <div className="project-item">
        <img className="project-img" src={toDo} alt="to do list" />
        <div>
          <h2 className="project-item-title">
            {languageData.projectItemTitle5}
          </h2>
          <ul className="tags">
            <li className="tag react">react</li>
            <li className="tag javascript">javascript</li>
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
            <li className="tag backend">backend</li>
            <li className="tag nodejs">nodejs</li>
            <li className="tag mongodb">mongodb</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/react-to-do-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="project-link-icon" />
            {languageData.projectItemLink1}
          </a>
          <a
            className="project-link"
            href="https://to-do-app-frontend-amn0.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-link-icon" />
            {languageData.projectItemLink2}
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectsItems;

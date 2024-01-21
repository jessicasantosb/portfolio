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
      <div class="project-card">
        <img className="project-img" src={calculator} alt="calculator" />
        <div class="card-content">
          <h2 className="project-item-title">
            {languageData.projectItemTitle1}
          </h2>
          <ul className="tags">
            <li className="tag css">css3</li>
            <li className="tag html">html5</li>
            <li className="tag frontend">frontend</li>
            <li className="tag git">git</li>
          </ul>
          <div className="project-links">
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
      </div>
    );
  }

  if (projectName === "SignIn") {
    return (
      <div class="project-card">
        <img className="project-img" src={sigin} alt="sigin" />
        <div class="card-content">
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
          <div className="project-links">
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
      </div>
    );
  }
  if (projectName === "Weather") {
    return (
      <div class="project-card">
        <img className="project-img" src={weather} alt="weather" />
        <div class="card-content">
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
          <div className="project-links">
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
      </div>
    );
  }
  if (projectName === "ReadmeBooks") {
    return (
      <div class="project-card">
        <img className="project-img" src={readmeBooks} alt="readme.books" />
        <div class="card-content">
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
          <div className="project-links">
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
      </div>
    );
  }
  if (projectName === "ToDo") {
    return (
      <div class="project-card">
        <img className="project-img" src={toDo} alt="to do list" />
        <div class="card-content">
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
          <div className="project-links">
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
      </div>
    );
  }

  if (projectName === "Building") {
    return (
      <div class="project-card building">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div class="card-content">
          <p className="card-building-text">
            {languageData.projectItemBuilding}
          </p>
          <div class="loader"></div>
        </div>
      </div>
    );
  }
}

export default ProjectsItems;

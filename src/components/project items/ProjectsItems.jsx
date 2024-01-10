import React, {useContext} from "react";
import "./ProjectsItems.css";
import { LanguageContext } from '../contexts/LanguageContext';
  import { FaLink } from "react-icons/fa";

function ProjectsItems({ projectName }) {
  // const { languageData } = useLanguage();
  const { languageData } = useContext(LanguageContext);


  if (projectName === "Calculator") {
    return (
      <div className="project-item">
        <h2 className="project-item-title">{languageData.projectItemTitle1}</h2>
        <ul className="tags">
          <li className="tag css">css3</li>
          <li className="tag html">html5</li>
          <li className="tag frontend">frontend</li>
          <li className="tag git">git</li>
        </ul>
        <div className="project-link-div">
          <FaLink />
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.projectItemLink}
          </a>
        </div>
      </div>
    );
  }

  if (projectName === "SignIn") {
    return (
      <div className="project-item">
        <h2 className="project-item-title">{languageData.projectItemTitle2}</h2>
        <ul className="tags">
          <li className="tag javascript">javascript</li>
          <li className="tag css">css3</li>
          <li className="tag html">html5</li>
          <li className="tag frontend">frontend</li>
          <li className="tag git">git</li>
          <li className="tag backend">backend</li>
          <li className="tag nodejs">nodejs</li>
        </ul>
        <div className="project-link-div">
          <FaLink />
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.projectItemLink}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "Weather") {
    return (
      <div className="project-item">
        <h2 className="project-item-title">{languageData.projectItemTitle3}</h2>
        <ul className="tags">
          <li className="tag react">react</li>
          <li className="tag javascript">javascript</li>
          <li className="tag css">css3</li>
          <li className="tag html">html5</li>
          <li className="tag frontend">frontend</li>
          <li className="tag git">git</li>
        </ul>
        <div className="project-link-div">
          <FaLink />
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.projectItemLink}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "ReadmeBooks") {
    return (
      <div className="project-item">
        <h2 className="project-item-title">{languageData.projectItemTitle4}</h2>
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
        <div className="project-link-div">
          <FaLink />
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/readme.book"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.projectItemLink}
          </a>
        </div>
      </div>
    );
  }
  if (projectName === "ToDo") {
    return (
      <div className="project-item">
        <h2 className="project-item-title">{languageData.projectItemTitle5}</h2>
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
        <div className="project-link-div">
          <FaLink />
          <a
            className="project-link"
            href="https://github.com/jessicasantosb/react-to-do-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.projectItemLink}
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectsItems;

import React, { useContext } from "react";
import "./ProjectsItems.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import calculator from "../../images/calculator.png";
import weather from "../../images/weatherapp.png";
import readmeBooks from "../../images/readme.books.png";
import toDo from "../../images/todo.png";

function ProjectsItems() {
  const { languageData } = useContext(LanguageContext)

  const textRepository = languageData.projectItemTextRepository;
  const textLive = languageData.projectItemTextLive;

  const projects = [
    {
      title: languageData.projectItemTitle1,
      tags: ["html", "css", "frontend", "git"],
      imgSrc: calculator,
      linkRepository: "https://github.com/jessicasantosb/calculator",
      linkLive: "https://jessicasantosb.github.io/calculator/",
    },
    {
      title: languageData.projectItemTitle2,
      tags: ["react", "javascript", "html", "css", "frontend", "git"],
      imgSrc: weather,
      linkRepository: "https://github.com/jessicasantosb/weather-app",
      linkLive: "https://jessicasantosb.github.io/weather-app/",
    },
    {
      title: languageData.projectItemTitle3,
      tags: ["react", "javascript", "html", "css", "frontend", "git", "backend", "nodejs", "mongodb"],
      imgSrc: readmeBooks,
      linkRepository: "https://github.com/jessicasantosb/readme.book",
      linkLive: "https://readmebooks.vercel.app/",
    },
    {
      title: languageData.projectItemTitle4,
      tags: ["react", "javascript", "html", "css", "frontend", "git", "backend", "nodejs", "mongodb"],
      imgSrc: toDo,
      linkRepository: "https://github.com/jessicasantosb/react-to-do-app",
      linkLive: "https://to-do-app-frontend-amn0.onrender.com/",
    },
  ];

  return (
    <div>
      {projects.map((project, i) => (
        <div className="project-card center" key={i}>
          <div className="dots"></div>
          <h2 className="project-item-title">{project.title}</h2>
          <ul className="tags disable-selection">
            {project.tags.map((tag, i) => (
              <li className={`tag ${tag.toLowerCase()}`} key={i}>
                {tag}
              </li>
            ))}
          </ul>
          <div className="card-content center">
            <img className="project-img" src={project.imgSrc} alt="calculator" />
            <div className="project-links">
              <a
                className="project-link"
                href={project.linkRepository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="project-link-icon" />
                {textRepository}
              </a>
              <a
                className="project-link"
                href={project.linkLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="project-link-icon" />
                {textLive}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsItems;

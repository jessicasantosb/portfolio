
import React, {useContext} from "react";
import "./Projects.css";
import { LanguageContext } from '../contexts/LanguageContext';
import ProjectsItems from "../project items/ProjectsItems";
function Projects() {
  // const { languageData } = useLanguage();

  const { languageData } = useContext(LanguageContext);

  return (
    <section id="projects">
      <h1 className="title">
        {languageData.projectsTitle}<span className="title-underline">_</span>
      </h1>
      <p className="subtitle">{languageData.projectsSubtitle}</p>
      <div className="projects-div">
        <ProjectsItems projectName={"Calculator"} />
        <ProjectsItems projectName={"SignIn"} />
        <ProjectsItems projectName={"Weather"} />
        <ProjectsItems projectName={"ReadmeBooks"} />
        <ProjectsItems projectName={"ToDo"} />
      </div>
    </section>
  );
}

export default Projects;

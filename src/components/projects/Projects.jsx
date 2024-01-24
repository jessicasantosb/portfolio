import React, { useContext } from "react";
import "./Projects.css";
import {TitleTypewriter} from "../TitleTypewriter";
import { LanguageContext } from "../contexts/LanguageContext";
import ProjectsItems from "../project items/ProjectsItems";
function Projects() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="projects">
      <h1 className="title disable-selection">
        <TitleTypewriter str={languageData.projectsTitle} />
      </h1>
      <p className="subtitle disable-selection">
        {languageData.projectsSubtitle}
      </p>
      <div className="projects-div">
        <ProjectsItems projectName={"Calculator"} />
        <ProjectsItems projectName={"SignIn"} />
        <ProjectsItems projectName={"Weather"} />
        <ProjectsItems projectName={"ReadmeBooks"} />
        <ProjectsItems projectName={"ToDo"} />
        <ProjectsItems projectName={"Building"} />
      </div>
    </section>
  );
}

export default Projects;

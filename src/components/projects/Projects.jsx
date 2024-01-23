import React, { useContext } from "react";
import "./Projects.css";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "../contexts/LanguageContext";
import ProjectsItems from "../project items/ProjectsItems";
function Projects() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="projects">
      <h1 className="title disable-selection">
      <Typewriter
              options={{
                strings: [languageData.projectsTitle],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 5000,
                cursor: '_',
                cursorClassName: "title-underline",
              }}
            />
      </h1>
      <p className="subtitle disable-selection">{languageData.projectsSubtitle}</p>
      <div className="projects-div" >
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

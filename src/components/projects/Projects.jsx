import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import { TitleTypewriter } from "../../utils/TitleTypewriter";
import { LanguageContext } from "../../contexts/LanguageContext";
import ProjectsItems from "./project items/ProjectsItems";

function Projects() {
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    const card_height = document.querySelector(".project-card").offsetHeight;

    gsap.registerPlugin(ScrollTrigger);

    let context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-div",
          pin: true,
          pinSpacing: true,
          start: "top+100px top+=100px",
          end: "bottom top",
          scrub: true,
        },
      });

      timeline.add(
        gsap
          .timeline()
          .to(".project-card:nth-child(2)", { y: -card_height + "px" }, 0)
          .to(".project-card:nth-child(3)", { y: -card_height + "px" }, 0)
          .to(" .project-card:nth-child(4)", { y: -card_height + "px" }, 0)
          .to(".project-card:nth-child(1)", { scale: 0.95 }, 0)
      );
      timeline.add(
        gsap
          .timeline()
          .to(".project-card:nth-child(3)", { y: -(card_height * 2) + "px" }, 0)
          .to(".project-card:nth-child(4)", { y: -(card_height * 2) + "px" }, 0)
          .to(".project-card:nth-child(1)", { scale: 0.85 }, 0)
          .to(".project-card:nth-child(2)", { scale: 0.9 }, 0)
      );
      timeline.add(
        gsap
          .timeline()
          .to(".project-card:nth-child(4)", { y: -(card_height * 3) + "px" }, 0)
          .to(".project-card:nth-child(1)", { scale: 0.8 }, 0)
          .to(".project-card:nth-child(2)", { scale: 0.85 }, 0)
          .to(".project-card:nth-child(3)", { scale: 0.9 }, 0)
      );
    });

    return () => {
      context.revert();
    };
  });

  return (
    <section id="projects">
      <div className="fade-in">
        <h1 className="title disable-selection">
          <TitleTypewriter str={languageData.projectsTitle} />
        </h1>
        <p className="subtitle disable-selection">
          {languageData.projectsSubtitle}
        </p>
      </div>
      <div className="projects-div">
        <ProjectsItems />
      </div>
    </section>
  );
}

export default Projects;

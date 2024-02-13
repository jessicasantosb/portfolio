import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FadeInAnimation() {
  // fade in animation
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 100, duration: 1 });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 500",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return <></>;
}

export default FadeInAnimation;

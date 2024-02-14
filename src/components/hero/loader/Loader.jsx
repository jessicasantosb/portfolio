import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Loader.css";

function Loader() {
  useEffect(() => {
    gsap.to(".loader-svg", {
      scale: 0,
      duration: 2,
    })

    gsap.to(".blinder", {
      scaleY: 0,
      delay: 1,
      stagger: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="loader center">
      <div className="blinder-container">
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
      </div>

      {/* letter J and B, font family Tourney */}
      <svg
        className="loader-svg"
        viewBox="0 0 112.95 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M 38.95 70 L 10.35 70 L 0 59.7 L 0 41.85 L 14.15 41.85 L 14.15 52.8 L 17.2 55.85 L 32.1 55.85 L 35.15 52.8 L 35.15 14.15 L 9.55 14.15 L 9.55 0 L 49.3 0 L 49.3 59.7 L 38.95 70 Z M 1.35 59.15 L 10.9 68.65 L 38.4 68.65 L 47.95 59.15 L 47.95 1.35 L 10.9 1.35 L 10.9 12.8 L 36.5 12.8 L 36.5 53.35 L 32.65 57.2 L 16.65 57.2 L 12.8 53.35 L 12.8 43.15 L 1.35 43.15 L 1.35 59.15 Z M 102.65 70 L 61.3 70 L 61.3 0 L 100.4 0 L 110.7 10.3 L 110.7 28.15 L 106.25 32.6 L 112.95 39.35 L 112.95 59.7 L 102.65 70 Z M 62.65 1.35 L 62.65 68.65 L 102.05 68.65 L 111.6 59.15 L 111.6 39.9 L 104.4 32.6 L 109.4 27.6 L 109.4 10.85 L 99.85 1.35 L 62.65 1.35 Z M 96.3 57.2 L 74.1 57.2 L 74.1 40 L 94.95 40 L 100.15 45.2 L 100.15 53.35 L 96.3 57.2 Z M 92.15 28.55 L 74.1 28.55 L 74.1 12.8 L 94.1 12.8 L 97.95 16.65 L 97.95 22.8 L 92.15 28.55 Z M 75.45 41.35 L 75.45 55.85 L 95.75 55.85 L 98.8 52.8 L 98.8 45.75 L 94.4 41.35 L 75.45 41.35 Z M 75.45 14.15 L 75.45 27.2 L 91.6 27.2 L 96.6 22.25 L 96.6 17.2 L 93.55 14.15 L 75.45 14.15 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
}

export default Loader;

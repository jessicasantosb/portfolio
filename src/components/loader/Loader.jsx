import { useEffect } from "react";
import { gsap } from "gsap";
import "./Loader.css";
import Logo from "../../utils/Logo";

function Loader() {
  useEffect(() => {
    gsap.to(".logo", {
      scale: 0,
      duration: 2,
    })

    gsap.to(".blinder", {
      scaleY: 0,
      delay: 2,
      stagger: 0.2,
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
      <Logo />
    </div>
  );
}

export default Loader;

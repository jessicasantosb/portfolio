import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
     const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 100, duration: 1, });
  
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
  },[])
  
  return (
    <>
      <ScrollTop />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import FadeInAnimation from "./utils/FadeInAnimation";
import ScrollTop from "./utils/scrollTop/ScrollTop";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <FadeInAnimation />
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

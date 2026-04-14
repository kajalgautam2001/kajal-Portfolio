import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const ParticleBackground = lazy(
  () => import("./components/ParticleBackground")
);

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Contact />
      </div>
    </div>
  );
}

export default App;

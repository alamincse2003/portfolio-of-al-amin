import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Eductaion from "./components/Eductaion";
import Experiences from "./components/Experiences";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Eductaion />
      <Certifications />
      <Contact />
      
    </>
  );
}

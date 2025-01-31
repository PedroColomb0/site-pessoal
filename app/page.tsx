import About from "./components/About";
import Certificacoes from "./components/Certificacoes";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certificacoes/>
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

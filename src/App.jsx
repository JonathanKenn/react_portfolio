import React, { useEffect } from "react";
import HomePage from "./section/home";
import About from "./section/about";
import TechStack from "./section/techstack";
import BackToTop from "./components/BackTop";
import Project from "./section/project";
import Contact from "./section/contact";
import Footer from "./section/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkToggle from "./components/DarkToggle";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className="max-w-full bg-primary font-montserrat text-secondary">
      <DarkToggle />
      <HomePage />
      <About />
      <TechStack />
      <BackToTop />

      <Project />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

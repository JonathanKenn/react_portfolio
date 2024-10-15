import React, { useEffect } from "react";
import HomePage from "./pages/home";
import About from "./pages/about";
import TechStack from "./pages/techstack";
import BackToTop from "./components/BackTop";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkToggle from "./components/DarkToggle";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <div className="overflow-hidden bg-primary font-montserrat text-secondary">
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

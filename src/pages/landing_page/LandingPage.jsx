import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

const LandingPage = () => {
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //Functionality to trigger 'Link to' from HeaderForTheProjectPage.jsx
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
    } else if (location.hash === "#projects") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <main className="mx-auto w-[95%] lg:w-[75%]">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};
export default LandingPage;

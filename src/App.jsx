import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsProvider from "./helpers/ProjectsContext";
import ScrollToTop from "./helpers/ScrollToTop";

import LandingPage from "./pages/landing_page/LandingPage";
import Footer from "./components/Footer";

import Project_0 from "./pages/project_pages/Project_0";
import Project_1 from "./pages/project_pages/Project_1";
import Project_2 from "./pages/project_pages/Project_2";
import Project_3 from "./pages/project_pages/Project_3";
import Project_4 from "./pages/project_pages/Project_4";
import Project_5 from "./pages/project_pages/Project_5";

function App() {
  return (
    <div className="App">
      <ProjectsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/project/is-it-only-me" element={<Project_0 />} />
            <Route path="/project/ksss-history" element={<Project_1 />} />
            <Route path="/project/taskify" element={<Project_2 />} />
            <Route path="/project/plant-butlers" element={<Project_3 />} />
            <Route path="/project/gues-the-sun-card" element={<Project_4 />} />
            <Route
              path="/project/the-90s-inspiration-site"
              element={<Project_5 />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProjectsProvider>
    </div>
  );
}

export default App;

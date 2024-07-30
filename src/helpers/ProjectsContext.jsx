import { createContext, useState } from "react";
import { PROJECTS } from "../data/projects_data";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(PROJECTS);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;

import React, { useContext } from "react";
import { ProjectsContext } from "../../../helpers/ProjectsContext.jsx";
import { Link } from "react-router-dom";
import SectionDivider from "../../../components/SectionsDivider.jsx";
import ButtonCTA from "../../../components/ButtonCta.jsx";

const ProjectsSection = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section id="projects" className="py-10">
      <SectionDivider />
      <h3>My recent projects</h3>

      <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="py-3 md:p-3 bg-white border border-[#e9e8e8] rounded-lg shadow-lg flex flex-col h-full "
          >
            <img
              src={project.image}
              alt={project.alt}
              className="lg:h-[250px] w-auto object-cover shadow-lg shadow-[#7A7A7A]/10 rounded"
            />
            <div className="p-4 text-center flex flex-col flex-1">
              <h4>{project.title}</h4>

              <p className="sm:text-base uppercase text-[#3C3C3C] tracking-normal mb-8 ">
                {project.intro}
              </p>
              <footer className="mt-auto flex flex-col">
                <ButtonCTA slug={project.slug} />

                <div className="pt-8 flex justify-end gap-6 font-montserrat font-medium text-base  text-gray underline ">
                  <Link
                    to={project.link_to_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="static
                     hover:text-black"
                  >
                    Git Hub
                  </Link>
                  <Link
                    to={project.link_to_live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="static hover:text-black"
                  >
                    Live Site
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ProjectsSection;

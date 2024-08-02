import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ProjectsContext } from "../../helpers/ProjectsContext";
import image_1_project_0 from "../../assets/img/projects_images/project_0/image_1_project_0.svg";
import image_2_project_0 from "../../assets/img/projects_images/project_0/image_2_project_0.webp";

import HeaderForTheProjectPage from "../../components/Header/HeaderForTheProjectPage";
import SectionDivider from "../../components/SectionsDivider";

const Project_0 = () => {
  const { projects } = useContext(ProjectsContext);
  const project = projects.find((p) => p.slug === "is-it-only-me");

  //- - - To open page from the top of it, instead usual browser behaviour for SPA- - -
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <HeaderForTheProjectPage />
      <article className="mx-auto w-[90%] lg:w-[75%] pt-20">
        <SectionDivider />
        <h1>{project.title}</h1>

        <img
          src={project.image}
          alt={project.alt}
          className="lg:h-[400px] m-auto min-h-[50%] "
        />

        <div className="flex flex-col lg:flex-row lg:gap-12 mt-12 ">
          <section className=" lg:w-1/2 mb-12 ">
            <h2>Idea</h2>
            <p>
              The idea behind this school project was to create a finished
              product that could continue to be reused by a broad audience even
              after reaching the school course goal. By focusing on this
              concept, the "Is It Only Me?" social gathering game was created.
            </p>
          </section>
          <section className=" lg:w-1/2 mb-12">
            <h2>Approach</h2>
            <p>
              After an ideation process, whiteboard sketches, and user journey
              mapping the project was transferred to Figma for further visual
              development.
            </p>
            <p>
              The main functionality was set and developed, and features were
              prioritized and embedded step by step.
            </p>
            <p>
              The school project&apos;s goal was to create audio, graphics, and
              immersive web experiences. The timeline for the project was 10
              days with a team of 4 students.
            </p>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row mt-12 mb-12 gap-12 ">
          <img
            src={image_2_project_0}
            alt={project.alt}
            className="lg:w-1/2 min-h-[50%] "
          />

          <section>
            <h2>Tools & Tech</h2>
            <div className="lg:pt-6 font-montserrat text-base sm:text-xl tracking-wide text-right">
              <ul>
                <li className="hover:bg-impact hover:text-white">
                  for the application - <strong>React + Vite</strong>
                </li>
                <li className="hover:bg-impact hover:text-white ">
                  for the styling - <strong>Tailwind</strong>
                </li>
                <li className="hover:bg-impact hover:text-white ">
                  for the animations - <strong>GSAP</strong>
                </li>
                <li className="hover:bg-impact hover:text-white">
                  for the dev collaboration - <strong>GitHub</strong>
                </li>
                <li className="hover:bg-impact hover:text-white">
                  for the visualization & collaboration - <strong>Figma</strong>
                </li>
                <li className="hover:bg-impact hover:text-white">
                  for the task management - <strong>Trello</strong>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row mt-12 mb-12 gap-12 ">
          <section className=" lg:w-1/2 mb-12">
            <h2>My Own Learnings:</h2>
            <p>
              The biggest learning within this project was implementing the GSAP
              framework for the animations within the project, and adding audio
              effects to it. This was a requirement to reach the course goal at
              the first place.
            </p>
            <p>
              This was my second project where I tried to use the Tailwind
              framework. This framework really accelerates the styling approach
              in combination with classic CSS.
            </p>
            <p>
              To create a project from an idea to a ready-to-use product within
              a straight time limits, knowledge gaining on the way, but working
              with a really good team - is possible!
            </p>
          </section>

          <img
            src={image_1_project_0}
            alt={project.alt}
            className="object-cover m-auto lg:w-1/2 rounded-2xl "
          />
        </div>
        <section className="mb-12">
          <h2>this project on:</h2>
          <div className=" flex justify-start gap-6 font-montserrat font-medium text-base  text-impact underline ">
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
        </section>
      </article>
    </div>
  );
};

export default Project_0;

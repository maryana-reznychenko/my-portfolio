// import HeaderForTheProjectPage from "../../components/Header/HeaderForTheProjectPage";
// import SectionDivider from "../../components/SectionsDivider";

// const Project_0 = () => {
//   return (
//     <div>
//       <HeaderForTheProjectPage />
//       <article className="mx-auto w-[95%] lg:w-[75%] pt-20">
//         <SectionDivider />

//         <h1>More information about this project is coming soon. </h1>
//         <section></section>
//         <section></section>
//         <section></section>
//         <section></section>
//         <section></section>
//       </article>
//     </div>
//   );
// };

// export default Project_0;

import React, { useContext } from "react";
import { ProjectsContext } from "../../helpers/ProjectsContext";
import HeaderForTheProjectPage from "../../components/Header/HeaderForTheProjectPage";
import SectionDivider from "../../components/SectionsDivider";

const Project_0 = () => {
  const { projects } = useContext(ProjectsContext);
  const project = projects.find((p) => p.slug === "is-it-only-me");

  return (
    <div>
      <HeaderForTheProjectPage />
      <article className="mx-auto w-[95%] lg:w-[75%] pt-20">
        <SectionDivider />
        <h1>{project.title}</h1>

        <section className="mb-12">
          <h2>Idea</h2>
          <p>
            The idea behind this school project was to create a finished product
            that could continue to be reused by a broad audience even after
            reaching the school course goal. By focusing on this concept, the
            "Is It Only Me?" social gathering game was created.
          </p>
        </section>
        <section className="mb-12">
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
            The school project’s goal was to create audio, graphics, and
            immersive web experiences. The timeline for the project was 10 days
            with a team of 4 students.
          </p>
        </section>

        <img
          src={project.image}
          alt={project.alt}
          className="h-[250px] object-cover shadow-lg shadow-[#7A7A7A]/10 rounded"
        />

        <section className="mb-12">
          <h2>Tools & Tech</h2>
          <div className="font-montserrat text-base sm:text-xl tracking-wide text-right">
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
        <section className="mb-12">
          <h2>Learnings</h2>
        </section>
      </article>
    </div>
  );
};

export default Project_0;

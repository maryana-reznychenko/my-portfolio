import SectionDivider from "../../../components/SectionsDivider";

const SkillsSection = () => {
  return (
    <section className="py-10">
      <SectionDivider />

      <h3>the current tools I work with </h3>

      <div className="font-rokkit tracking-wider text-center text-sm sm:text-xl uppercase grid grid-cols-3 ">
        <ul>
          <li className="hover:bg-impact hover:text-white">HTML5</li>
          <li className="hover:bg-impact hover:text-white ">CSS3</li>
          <li className="hover:bg-impact hover:text-white">JavaScript</li>
        </ul>
        <ul>
          <li className="hover:bg-impact hover:text-white">React.JS</li>
          <li className="hover:bg-impact hover:text-white">Node.JS</li>
          <li className="hover:bg-impact hover:text-white">SEO</li>
        </ul>
        <ul>
          <li className="hover:bg-impact hover:text-white">Tailwind</li>
          <li className="hover:bg-impact hover:text-white">GSAP</li>
          <li className="hover:bg-impact hover:text-white">Figma</li>
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;

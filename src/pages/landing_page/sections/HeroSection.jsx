import SectionDivider from "../../../components/SectionsDivider";
import hero_photo from "../../../assets/img/photo/hero_photo.webp";

const HeroSection = () => {
  return (
    <section id="home" className="py-10">
      <SectionDivider />
      <h1>
        front end developer <br />
        with ux/ui skills
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0 ">
        <div className="flex-1 max-w-[85%] lg:max-w-[50%]">
          <img
            className="w-fit-content lg:w-[80%] m-auto object-cover shadow-lg shadow-[#C22A29]/50 rounded "
            src={hero_photo}
            alt="Maryana's height photo where she smiles while opening the door"
          />
        </div>
        <div className="flex-1 max-w-[85%] lg:max-w-[50%]">
          <h2 className="leading-relaxed">
            HELLO! <br /> I AM <span className="font-bold">MARYANA</span>,
          </h2>
          <p>
            a solution-oriented Front-end Developer with UX-UI skills. <br />I
            aim to create robust software with interfaces where customers &apos;
            needs are in focus.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

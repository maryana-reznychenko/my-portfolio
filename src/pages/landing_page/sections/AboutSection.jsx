import SectionDivider from "../../../components/SectionsDivider";
import about_photo from "../../../assets/img/photo/about_photo.webp";
import ButtonCV from "../../../components/ButtonCV";

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <SectionDivider />
      <h3>about me</h3>

      <div className="flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0">
        <div className="flex-1 max-w-[85%] lg:max-w-[50%]">
          <h4 className="mt-0 font-normal">
            let me <span className="font-bold">introduce</span> myself
          </h4>
          <p>
            With a solid professional background in finance and economics,
            I&apos;ve decided to start a new chapter in my career.
          </p>
          <p>
            In the middle of life, I challenged myself to take a new step and
            learn programming.
          </p>
          <p>
            In 2023 I became a Frontend Developer student at Hyper Island
            University. My keen eye for detail, structured thinking and
            inquisitive mind, knowledge of UX-UI design, and love to learn,
            benefit my coding performance and drive me to further programming
            exploration.
          </p>
          <p>
            I enjoy what I do, and as the next step in my professional journey,
            I envision myself as a Fullstack developer.
          </p>
        </div>
        <div className="flex-1 max-w-[85%] lg:max-w-[50%]">
          <img
            className="w-fit-content lg:w-[70%] m-auto object-cover shadow-lg shadow-[#C22A29]/50 rounded "
            src={about_photo}
            alt="Maryana's photo"
          />
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <ButtonCV />
      </div>
    </section>
  );
};
export default AboutSection;

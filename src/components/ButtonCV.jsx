import { motion } from "framer-motion";

function ButtonCV() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/19gqpg29mP88afy_H383vS1EYc03aEJ3E/view?usp=sharing"
    );
  };

  return (
    <>
      <motion.button
        onClick={handleButtonClick}
        className="lg:w-[50%] sm:w-[85%]
        py-3 px-[5%] mb-4 rounded border-[1px] border-rose bg-impact  text-white font-montserrat font-light hover:font-normal tracking-wider transition-colors duration-300"
        whileHover={{
          textShadow: "0px 0px 20px rgb(240, 240, 240)",
        }}
        initial={{ opacity: 0.2 }}
        whileInView={{
          opacity: 1,
          scale: 1.05,
          transition: { duration: 1, delay: 0.2 },
          boxShadow: "0px 0px 8px rgb(33, 33, 33)",
        }}
      >
        CHECK OUT MY CV
      </motion.button>
    </>
  );
}
export default ButtonCV;

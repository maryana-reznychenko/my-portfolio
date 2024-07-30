import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ButtonCTA({ slug }) {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo(`/project/${slug}`);
    // window.open(`/project/${slug}`, "_blank");
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className="p-3 mb-4 rounded border-[1px] border-gray hover:bg-gray  text-black hover:text-white font-montserrat font-light tracking-wider transition-colors duration-300"
        whileHover={{
          textShadow: "0px 0px 20px rgb(240, 240, 240)",
          boxShadow: "0px 0px 8px rgb(33, 33, 33)",
        }}
      >
        MORE ABOUT IT
      </motion.button>
    </>
  );
}
export default ButtonCTA;

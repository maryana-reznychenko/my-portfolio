import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-rose h-1 sm:w-[95%] m-auto"
      initial={{ opacity: 0, scale: 0.1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
    ></motion.div>
  );
};
export default SectionDivider;

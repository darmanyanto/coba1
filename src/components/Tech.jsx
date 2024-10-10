import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiLaravel } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

// rafce
const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex flex-col min-h-[70vh] w-full felx-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap p-5 gap-10 items-center justify-center ">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoHtml5 />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoCss3 />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoJavascript />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoBootstrap />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoTailwindCss />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <GrMysql />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <SiLaravel />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"
        >
          <BiLogoFigma />
        </motion.div>
      </div>
    </div>
  );
};
export default Tech;

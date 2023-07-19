import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I have worked with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack </h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          Programming languages, frameworks, libraries, and other developer tools I have experience working with:
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '');
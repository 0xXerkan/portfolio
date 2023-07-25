import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TechCard = ({index, name, icon}) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
                key={name} 
                className="w-28 h-28 rounded-[20px] bg-tertiary flex justify-center items-center">
                  <img 
                    src={icon} 
                    alt={name}
                    className="object-contain p-2" />
        </div>
      </motion.div>
    </Tilt>

  )
}

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

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
          
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '');
import { motion } from "framer-motion";
import "./Skills.sass";
import { blinkingOpacity, blinkingOpacityDuration } from "../helpers";

function Skills({ skills = [{}] }) {
  return (
    <motion.div
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      animate={{
        opacity: blinkingOpacity,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: blinkingOpacityDuration }}
    >
      <div className="skills__header">Skills</div>
      <div className="skills__blocks block">
        {skills.map((skill: any) => (
          <div className="block__items item" key={skill.title}>
            <img className="item__image" src={skill.picture} alt={skill.alt} />
            <div className="item__text text">
              <div className="text__header">{skill.title}</div>
              <div className="text__description">{skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

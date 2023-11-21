import {motion} from "framer-motion"
import {BLINKING_OPACITY, BLINKING_OPACITY_DURATION} from "../constants"
import {SkillsProps} from "../types"
import "../styles/pages/Skills.sass"

import javascript from "../assets/images/javascript.png"
import react from "../assets/images/react.png"
import vue from "../assets/images/vue.png"
import sass from "../assets/images/sass.png"
import typescript from "../assets/images/typescript.png"

function Skills() {
    const skills: SkillsProps[] = [
        {
            title: "JavaScript",
            description: "Forever",
            picture: javascript,
            alt: "JavaScript",
        },
        {
            title: "Linux",
            description: "Forever",
        },
        {
            title: "Nuxt",
            description: "In progress",
        },
        {
            title: "Pinia",
            description: "In progress",
        },
        {
            title: "SCSS/Sass",
            description: "In progress",
            picture: sass,
            alt: "Sass",
        },
        {
            title: "TypeScript",
            description: "In progress",
            picture: typescript,
            alt: "TypeScript",
        },
        {
            title: "Vue 2/3",
            description: "In progress",
            picture: vue,
            alt: "Vue",
        },
        {
            title: "React[Native]",
            description: "On vacation 🏖️",
            picture: react,
            alt: "React",
        },
    ]
    return (
        <motion.div
            id="skills"
            className="skills"
            initial={{opacity: 0}}
            animate={{
                opacity: BLINKING_OPACITY,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{duration: BLINKING_OPACITY_DURATION}}>
            <div className="skills__header">/Skills</div>
            <h3>Some images may be unavailable</h3>
            <div className="skills__blocks block">
                {skills.map((skill: any) => (
                    <div
                        className="block__items item"
                        key={skill.title}>
                        {
                            skill.picture &&
                            <img
                                className="item__image"
                                src={skill.picture}
                                alt={skill.alt}
                            />
                        }
                        <div className="item__text text">
                            <div className="text__header">{skill.title}</div>
                            <div className="text__description">{skill.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills

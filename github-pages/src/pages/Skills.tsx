// @ts-nocheck
import { motion } from "framer-motion";
import "./Skills.sass";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";

function Skills() {
	const skills = [
		{
			title: "JavaScript",
			description:
				"I learned about JavaScript quite a long time ago, but only last summer I decided to study it in full. I really liked the flexibility of the language and the development tools available. It can be said that during this time I managed not only to study the basic concepts and possibilities, but also extended constructions, subtleties and features of the language. With a little experience in C++ programming, it opened up to me after a few months of study. I would like to grow more towards an experienced developer who knows cool patterns, architecture and features of using one or another method to get what you want. Wish me luck.",
			picture: javascript,
			alt: "JavaScript",
		},
		{
			title: "React",
			description:
				"At the moment I'm learning React again, because I forgot a lot. It's one of the coolest frameworks out there right now, not least because a lot of the stuff just makes Javascript more flexible than it even is. There are so many convenient implementations that you are constantly surprised at how much it can do. At the moment I know the basic concepts of React, some hooks and props. But soon I will know much more and break into the market to work and have fun.",
			picture: react,
			alt: "React",
		},
		{
			title: "Vue",
			description:
				"My very understanding of development as it is began with Vue. Thank you so much, Evan, for bringing so many talented guys into the industry and making it clear that there is absolutely nothing difficult in taking and turning your idea into a cool project. And thanks for the cool ecosystem, in which it is not so easy to take and turn a project into an incomprehensible mess haha. I use Vue, Vue Router, Vuex with great pleasure every time I get the chance. And I really like to read the code that I left - light, concise, understandable even to my granny.",
			picture: vue,
			alt: "Vue",
		},
	];

	return (
		<motion.div
			id="skills"
			className="skills"
			initial={{ opacity: 0 }}
			animate={{
				opacity: [1, Math.random(), Math.random(), Math.random(), 1],
			}}
			exit={{
				opacity: 0,
			}}
			transition={{ duration: 0.5 }}
		>
			<div className="skills__header">Skills</div>
			<div className="skills__blocks block">
				{skills.map((skill) => (
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

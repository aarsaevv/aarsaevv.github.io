// @ts-nocheck
import "./Skills.sass";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";

function Skills() {
	const skills = [
		{
			skillName: "JavaScript",
			skillDescription:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium, vero ad dicta maxime laboriosam molestias in similique repellendus doloribus ut saepe ducimus ipsum iure error doloremque atque. Illum atque exercitationem recusandae tempora nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa reprehenderit cupiditate quos quisquam corrupti inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim nihil illum sequi?",
			skillImage: javascript,
			skillAlt: "JavaScript",
		},
		{
			skillName: "React",
			skillDescription:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium, vero ad dicta maxime laboriosam molestias in similique repellendus doloribus ut saepe ducimus ipsum iure error doloremque atque. Illum atque exercitationem recusandae tempora nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa reprehenderit cupiditate quos quisquam corrupti inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim nihil illum sequi?",
			skillImage: react,
			skillAlt: "React",
		},
		{
			skillName: "Vue",
			skillDescription:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium, vero ad dicta maxime laboriosam molestias in similique repellendus doloribus ut saepe ducimus ipsum iure error doloremque atque. Illum atque exercitationem recusandae tempora nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa reprehenderit cupiditate quos quisquam corrupti inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim nihil illum sequi?",
			skillImage: vue,
			skillAlt: "Vue",
		},
	];

	return (
		<div id="skills" className="skills">
			<div className="skills__header">Skills</div>
			<div className="skills__blocks block">
				{skills.map((skill) => (
					<div className="block__items item">
						<img
							className="item__image"
							src={skill.skillImage}
							alt={skill.skillAlt}
						/>
						<div className="item__text text">
							<div className="text__header">{skill.skillName}</div>
							<div className="text__description">{skill.skillDescription}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;

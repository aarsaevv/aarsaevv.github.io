import "./Skills.sass";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";

function Skills() {
	return (
		<div id="skills" className="skills">
			<div className="skills__header">Skills</div>
			<div className="skills__blocks block">
				<div className="block__items item">
					<img className="item__image" src={javascript} alt="javascript" />
					<div className="item__text text">
						<div className="text__header">JavaScript</div>
						<div className="text__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
							accusantium, vero ad dicta maxime laboriosam molestias in
							similique repellendus doloribus ut saepe ducimus ipsum iure error
							doloremque atque. Illum atque exercitationem recusandae tempora
							nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa
							reprehenderit cupiditate quos quisquam corrupti inventore. Fuga
							sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim
							nihil illum sequi?
						</div>
					</div>
				</div>
				<div className="block__items item">
					<img className="item__image" src={react} alt="react" />
					<div className="item__text text">
						<div className="text__header">React</div>
						<div className="text__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
							accusantium, vero ad dicta maxime laboriosam molestias in
							similique repellendus doloribus ut saepe ducimus ipsum iure error
							doloremque atque. Illum atque exercitationem recusandae tempora
							nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa
							reprehenderit cupiditate quos quisquam corrupti inventore. Fuga
							sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim
							nihil illum sequi?
						</div>
					</div>
				</div>
				<div className="block__items item">
					<img className="item__image" src={vue} alt="vue" />
					<div className="item__text text">
						<div className="text__header">Vue</div>
						<div className="text__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
							accusantium, vero ad dicta maxime laboriosam molestias in
							similique repellendus doloribus ut saepe ducimus ipsum iure error
							doloremque atque. Illum atque exercitationem recusandae tempora
							nesciunt blanditiis, quidem voluptas, incidunt qui dolores culpa
							reprehenderit cupiditate quos quisquam corrupti inventore. Fuga
							sapiente ab, aliquid, eaque deleniti, commodi odit incidunt enim
							nihil illum sequi?
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

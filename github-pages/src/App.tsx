import "./App.sass";
import photo from "./assets/images/photo.png";
import javascript from "./assets/images/javascript.png";
import react from "./assets/images/react.png";
import vue from "./assets/images/vue.png";
import linkedin from "./assets/images/linkedin.svg";
import google from "./assets/images/google.svg";
import telegram from "./assets/images/telegram.svg";
import github from "./assets/images/github.svg";

function App() {
	return (
		<div className="container--mobile">
			<div className="work">
				<div className="work__header">Work</div>
				<div className="work__list list">
					<div className="list__item item">
						<div className="item__title">Personal blog</div>
						<div className="item__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit blanditiis sequi dolores, sapiente similique sed
							quis quaerat ad voluptatibus voluptas, veritatis temporibus
							numquam laudantium perferendis quisquam inventore assumenda,
							eveniet ab?
						</div>
						<div className="item__links">
							<a
								href="https://aarsaevv.github.io/"
								target="_blank"
								rel="noreferrer"
							>
								https://aarsaevv.github.io/
							</a>
							<a
								href="https://github.com/aarsaevv/aarsaevv.github.io"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/aarsaevv/aarsaevv.github.io
							</a>
						</div>
					</div>
					<div className="list__item item">
						<div className="item__title">YAM YAM</div>
						<div className="item__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
							error eum, tempora, ut explicabo deleniti alias unde nam
							blanditiis laboriosam sunt labore praesentium laborum obcaecati
							quas maxime necessitatibus odio autem.
						</div>
						<div className="item__links">
							<a
								href="https://yamyam-f7b3c.web.app/"
								target="_blank"
								rel="noreferrer"
							>
								https://yamyam-f7b3c.web.app/
							</a>
							<a
								href="https://github.com/aarsaevv/yamyam"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/aarsaevv/yamyam
							</a>
						</div>
					</div>
					<div className="list__item item">
						<div className="item__title">Todo List</div>
						<div className="item__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
							atque consectetur autem illo, reprehenderit doloribus nam harum
							recusandae. Minima similique quasi debitis maxime soluta incidunt
							inventore iure itaque nobis reiciendis?
						</div>
						<div className="item__links">
							<a
								href="https://react-todolist-bc761.web.app/"
								target="_blank"
								rel="noreferrer"
							>
								https://react-todolist-bc761.web.app/
							</a>
							<a
								href="https://github.com/aarsaevv/react-todolist"
								target="_blank"
								rel="noreferrer"
							>
								https://github.com/aarsaevv/react-todolist
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="profile">
				<div className="profile__header">Profile</div>
				<img className="profile__photo" src={photo} alt="that's me" />
				<div className="profile__credentials credentials">
					<div className="credentials__name">Evgeny Arsaev</div>
					<div className="credentials__sphere">frontend developer</div>
				</div>
				<div className="profile__information information">
					<div className="information__block">
						<div className="block__header">About me</div>
						<div className="block__description">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Dignissimos reprehenderit recusandae hic. Minus explicabo ipsam
							voluptatem accusantium? Quisquam exercitationem maiores ipsam
							sapiente dolores autem asperiores quidem ea assumenda nihil ab
							iure consectetur, est accusantium in facere earum consequatur
							error necessitatibus!
						</div>
					</div>
					<div className="information__block">
						<div className="block__header">Interests</div>
						<div className="block__description interests">
							<div className="interests__tag">Movies</div>
							<div className="interests__tag">Tech</div>
							<div className="interests__tag">Music</div>
							<div className="interests__tag">Biking</div>
							<div className="interests__tag">Animals</div>
							<div className="interests__tag">Guitar</div>
						</div>
					</div>
					<div className="information__block">
						<div className="block__header">Personal data</div>
						<div className="block__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
							aliquid at cupiditate quibusdam temporibus autem tempora dolor
							nulla officiis vero voluptas porro placeat nesciunt debitis ab
							enim, inventore qui dicta. Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Nulla vero velit aliquid architecto, dolor
							consequatur. Illum commodi rerum doloremque ab tempora ex,
							veritatis nemo, in dolores cumque eveniet vel laborum!
						</div>
					</div>
				</div>
			</div>
			<div className="skills">
				<div className="skills__header">Skills</div>
				<div className="skills__blocks block">
					<div className="block__items item">
						<img className="item__image" src={javascript} alt="javascript" />
						<div className="item__text text">
							<div className="text__header">JavaScript</div>
							<div className="text__description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
								accusantium, vero ad dicta maxime laboriosam molestias in
								similique repellendus doloribus ut saepe ducimus ipsum iure
								error doloremque atque. Illum atque exercitationem recusandae
								tempora nesciunt blanditiis, quidem voluptas, incidunt qui
								dolores culpa reprehenderit cupiditate quos quisquam corrupti
								inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi
								odit incidunt enim nihil illum sequi?
							</div>
						</div>
					</div>
					<div className="block__items item">
						<img className="item__image" src={react} alt="react" />
						<div className="item__text">
							<div className="text__header">React</div>
							<div className="text__description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
								accusantium, vero ad dicta maxime laboriosam molestias in
								similique repellendus doloribus ut saepe ducimus ipsum iure
								error doloremque atque. Illum atque exercitationem recusandae
								tempora nesciunt blanditiis, quidem voluptas, incidunt qui
								dolores culpa reprehenderit cupiditate quos quisquam corrupti
								inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi
								odit incidunt enim nihil illum sequi?
							</div>
						</div>
					</div>
					<div className="block__items item">
						<img className="item__image" src={vue} alt="vue" />
						<div className="item__text">
							<div className="text__header">Vue</div>
							<div className="text__description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
								accusantium, vero ad dicta maxime laboriosam molestias in
								similique repellendus doloribus ut saepe ducimus ipsum iure
								error doloremque atque. Illum atque exercitationem recusandae
								tempora nesciunt blanditiis, quidem voluptas, incidunt qui
								dolores culpa reprehenderit cupiditate quos quisquam corrupti
								inventore. Fuga sapiente ab, aliquid, eaque deleniti, commodi
								odit incidunt enim nihil illum sequi?
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contacts">
				<div className="contacts__header">Contacts</div>
				<div className="contacts__links links">
					<div className="links__linkedin">
						<img src={linkedin} alt="linkedin" />
					</div>
					<div className="links__gmail">
						<img src={google} alt="gmail" />
					</div>
					<div className="links__telegram">
						<img src={telegram} alt="telegram" />
					</div>
					<div className="links__github">
						<img src={github} alt="github" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

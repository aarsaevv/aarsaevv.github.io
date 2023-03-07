//@ts-nocheck
import { motion } from "framer-motion";
import { blinkingOpacity, blinkingOpacityDuration } from "../helpers.ts";
import "./Work.sass";

function Work() {
	return (
		<motion.div
			id="work"
			className="work"
			initial={{ opacity: 0 }}
			animate={{
				opacity: blinkingOpacity,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{ duration: blinkingOpacityDuration }}
		>
			<div className="work__header">Works</div>
			<div className="work__list list">
				<div className="list__element element">
					<div className="element__title">Personal blog</div>
					<div className="element__description">
						This site you are currently on was made specifically for practicing
						React skills. It is very simple, but was made right after the
						transition from Vue. Not everything went smoothly, unfortunately,
						there were some difficulties with a personal blog, which will appear
						a little later. This site is hosted on Github Pages. There is also
						an interesting story with this - I had to quickly create a 404 page
						due to the lack of SPA support. In general, the stack is, if
						possible, TypeScript, pure React, Sass. It was made in the shortest
						possible time - in 4 days, along with the design and some
						functionality. I hope you will enjoy.
					</div>
					<div className="element__links links">
						<a
							className="links__work"
							href="https://aarsaevv.github.io/"
							target="_blank"
							rel="noreferrer"
						>
							https://aarsaevv.github.io/
						</a>
						<a
							className="links__work"
							href="https://github.com/aarsaevv/aarsaevv.github.io"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/aarsaevv/aarsaevv.github.io
						</a>
					</div>
				</div>

				<div className="list__element element">
					<div className="element__title">YAM YAM</div>
					<div className="element__description">
						This project is the implementation of one idea - an attempt to
						present our vision of how a modern online store can be designed.
						This is an Asian food delivery app. Written in Vue.js 3, Vue Router,
						HTML, CSS BEM, hosted by Firebase Firestore DB. At the moment, the
						layout is responsive for desktop and mobile versions. All dishes are
						loaded realtime from the database. Adding to the cart is done by
						interacting with local storage. A classic routed SPA that combines a
						minimalistic and eye-pleasing design with impressive performance
						compared to the competition.
					</div>
					<div className="element__links">
						<a
							className="links__work"
							href="https://yamyam-f7b3c.web.app/"
							target="_blank"
							rel="noreferrer"
						>
							https://yamyam-f7b3c.web.app/
						</a>
						<a
							className="links__work"
							href="https://github.com/aarsaevv/yamyam"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/aarsaevv/yamyam
						</a>
					</div>
				</div>
				<div className="list__element element">
					<div className="element__title">To-do List</div>
					<div className="element__description feature-list">
						This to-do list is one of the tests I received. <br />
						Stack: HTML, CSS (Less), JavaScript, React, Firestore. <br />
						Implemented functionality:
						<ul>
							<li className="feature-list__item">
								adding tasks (title and description)
							</li>
							<li className="feature-list__item">indication of the due date</li>
							<li className="feature-list__item">attaching pictures</li>
							<li className="feature-list__item">editing tasks</li>
							<li className="feature-list__item">deleting tasks</li>
							<li className="feature-list__item">
								marking the completion of the task
							</li>
							<li className="feature-list__item">
								checking if the selected date is relevant at the time the task
								was created.
							</li>
						</ul>
						All of this works with an existing database (previously added tasks
						are loaded from Firestore, their contents and state are saved there)
						and hosted on Firebase.
					</div>
					<div className="element__links">
						<a
							className="links__work"
							href="https://react-todolist-bc761.web.app/"
							target="_blank"
							rel="noreferrer"
						>
							https://react-todolist-bc761.web.app/
						</a>
						<a
							className="links__work"
							href="https://github.com/aarsaevv/react-todolist"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/aarsaevv/react-todolist
						</a>
					</div>
				</div>
				<div className="list__element element">
					<div className="element__title">Gearch. - Github repos search.</div>
					<div className="element__description feature-list">
						This github repos search is one of the Hotels.ru trainee tasks I received. <br />
						Stack: HTML, CSS (SCSS), JavaScript (Vanilla), Github Pages, Webpack. <br />
						Implemented functionality:
						<ul>
							<li className="feature-list__item">
								searching in github repos
							</li>
							<li className="feature-list__item">form validation (symbols amount and empty form checking)</li>
							<li className="feature-list__item">repos names is a link itself</li>
							<li className="feature-list__item">
								additional information about repo
							</li>
							<li className="feature-list__item">all of this designed on Vanilla JS ES6</li>
						</ul>
						All of this works with a Github API and hosted on Github Pages.
					</div>
					<div className="element__links">
						<a
							className="links__work"
							href="https://aarsaevv.github.io/github-repos-search/"
							target="_blank"
							rel="noreferrer"
						>
							https://aarsaevv.github.io/github-repos-search/
						</a>
						<a
							className="links__work"
							href="https://github.com/aarsaevv/react-todolist"
							target="_blank"
							rel="noreferrer"
						>
							https://github.io/aarsaevv/github-repos-search/
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
export default Work;

import "./Work.sass";

function Work() {
	return (
		<div id="work" className="work">
			<div className="work__header">Works</div>
			<div className="work__list list">
				<div className="list__element element">
					<div className="element__title">Personal blog</div>
					<div className="element__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit blanditiis sequi dolores, sapiente similique sed quis
						quaerat ad voluptatibus voluptas, veritatis temporibus numquam
						laudantium perferendis quisquam inventore assumenda, eveniet ab?
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
			</div>
		</div>
	);
}
export default Work;

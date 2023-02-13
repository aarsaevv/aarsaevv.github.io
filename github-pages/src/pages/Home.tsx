// @ts-nocheck
import "./Home.sass";
import welcome from "../assets/images/welcome.gif";

function Home() {
	// const blogItems = [
	// 	{
	// 		id: 4,
	// 		collapsed: false,
	// 		title: "First script",
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, quam sed blandit accumsan, mauris leo ultricies.",
	// 	},
	// 	{
	// 		id: 3,
	// 		collapsed: false,
	// 		title: "Second script",
	// 		text: "Huyorem Pipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, quam sed blandit accumsan, mauris leo ultricies.",
	// 	},
	// 	{
	// 		id: 2,
	// 		collapsed: false,
	// 		title: "First script",
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, quam sed blandit accumsan, mauris leo ultricies.",
	// 	},
	// 	{
	// 		id: 1,
	// 		collapsed: false,
	// 		title: "Second script",
	// 		text: "Huyorem Pipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, quam sed blandit accumsan, mauris leo ultricies.",
	// 	},
	// ];
	return (
		<div id="home" className="home">
			<div className="home__image image">
				<img className="image__main" src={welcome} alt="Welcome" />
			</div>
			<div className="home__wrapper wrapper">
				{/* {blogItems.map((blogItem) => (
					<div className="wrapper__blog-item blog-item">
						<div className="blog-item__header header">
							<div className="header__heading">Blog item({blogItem.id})</div>
							<div className="header__button button">
								<button className="button__collapse" alt="Collapse" />
								<button className="button__collapse--big" alt="Collapse" />
								<button className="button__expand" alt="Expand" />
								<button className="button__expand--big" alt="Expand" />
								<button className="button__cross" alt="Close" />
								<button className="button__cross--big" alt="Close" />
							</div>
						</div>
						<div className="blog-item__body body">
							<div className="body__heading">{blogItem.title}</div>
							<div className="body__text">{blogItem.text}</div>
							<button className="body__button" alt="Go to" />
							<button className="body__button--big" alt="Go to" />
						</div>
					</div>
				))} */}
			</div>
		</div>
	);
}
export default Home;

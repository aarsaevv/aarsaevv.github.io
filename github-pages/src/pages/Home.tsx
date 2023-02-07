import "./Home.sass";
import collapse from "../assets/images/button-collapse.svg";
import cross from "../assets/images/button-cross.svg";
import buttonSmall from "../assets/images/button-small.svg";
import expand from "../assets/images/button-expand.svg";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<div className="container--mobile">
			<Navbar />
			<div className="home">
				<div className="home__image"></div>
				<div className="home__blog-item blog-item">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(1)</div>
						<div className="header__button button">
							<div className="button__collapse">
								<img src={collapse} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={cross} alt="Button" />
							</div>
						</div>
					</div>
					<div className="blog-item__body body">
						<div className="body__heading">First script</div>
						<div className="body__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							lacinia, quam sed blandit accumsan, mauris leo ultricies.
						</div>
						<div className="body__button">
							<img src={buttonSmall} alt="Go to" />
						</div>
					</div>
				</div>
				<div className="home__blog-item-collapse blog-item-collapse">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(2)</div>
						<div className="header__button button">
							<div className="button__collapse">
								<img src={expand} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={cross} alt="Button" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;

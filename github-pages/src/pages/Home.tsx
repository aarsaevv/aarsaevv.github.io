import "./Home.sass";
import collapseSmall from "../assets/images/button-collapse.svg";
import crossSmall from "../assets/images/button-cross.svg";
import buttonSmall from "../assets/images/button-small.svg";
import expandSmall from "../assets/images/button-expand.svg";
import buttonBig from "../assets/images/button-big.svg";
import welcome from "../assets/images/welcome.gif";
import collapse from "../assets/images/button-collapse-big.svg";
import cross from "../assets/images/button-cross-big.svg";
import expand from "../assets/images/button-expand-big.svg";

function Home() {
	return (
		<div id="home" className="home">
			<div className="home__image image">
				<img className="image__main" src={welcome} alt="Welcome" />
			</div>
			<div className="home__wrapper wrapper">
				<div className="wrapper__blog-item blog-item">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(1)</div>
						<div className="header__button button">
							<div className="button__collapse">
								<img src={collapseSmall} alt="Button" />
							</div>
							<div className="button__collapse--big">
								<img src={collapse} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={crossSmall} alt="Button" />
							</div>
							<div className="button__cross--big">
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
						<div className="body__button--big">
							<img src={buttonBig} alt="Go to" />
						</div>
					</div>
				</div>
				<div className="wrapper__blog-item-collapse">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(2)</div>
						<div className="header__button button">
							<div className="button__expand">
								<img src={expandSmall} alt="Button" />
							</div>
							<div className="button__expand--big">
								<img src={expand} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={crossSmall} alt="Button" />
							</div>
							<div className="button__cross--big">
								<img src={cross} alt="Button" />
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper__blog-item blog-item">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(1)</div>
						<div className="header__button button">
							<div className="button__collapse">
								<img src={collapseSmall} alt="Button" />
							</div>
							<div className="button__collapse--big">
								<img src={collapse} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={crossSmall} alt="Button" />
							</div>
							<div className="button__cross--big">
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
						<div className="body__button--big">
							<img src={buttonBig} alt="Go to" />
						</div>
					</div>
				</div>
				<div className="wrapper__blog-item blog-item">
					<div className="blog-item__header header">
						<div className="header__heading">Blog item(1)</div>
						<div className="header__button button">
							<div className="button__collapse">
								<img src={collapseSmall} alt="Button" />
							</div>
							<div className="button__collapse--big">
								<img src={collapse} alt="Button" />
							</div>
							<div className="button__cross">
								<img src={crossSmall} alt="Button" />
							</div>
							<div className="button__cross--big">
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
						<div className="body__button--big">
							<img src={buttonBig} alt="Go to" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
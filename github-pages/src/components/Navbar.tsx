import logo from "../assets/images/logo.svg";
import navigation from "../assets/images/button-navigation.svg";
import "./Navbar.sass";

function Navbar() {
	return (
		<div className="navigation">
			<div className="navigation__logo logo">
				<img className="logo__image" src={logo} alt="Logo" />
			</div>
			<div className="navigation__button button">
				<img className="button__menu" src={navigation} alt="Navigation" />
			</div>
		</div>
	);
}

export default Navbar;

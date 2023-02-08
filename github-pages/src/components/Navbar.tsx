import logo from "../assets/images/logo.svg";
import home from "../assets/images/home.svg";
import work from "../assets/images/work.svg";
import skills from "../assets/images/skills.svg";
import profile from "../assets/images/profile.svg";
import contacts from "../assets/images/contacts.svg";
import navigation from "../assets/images/button-navigation.svg";
import "./Navbar.sass";

function Navbar() {
	return (
		<div className="navigation">
			<div className="navigation__logo logo">
				<img className="logo__image" src={logo} alt="Logo" />
			</div>
			<div className="navigation__links link">
				<div className="link__element element">
					<a className="element__link" href="#">
						Home
					</a>
					<img className="element__image" src={home} alt="Home" />
				</div>
				<div className="link__element element">
					<a className="element__link" href="#">
						Work
					</a>
					<img className="element__image" src={work} alt="Work" />
				</div>
				<div className="link__element element">
					<a className="element__link" href="#">
						Skills
					</a>
					<img className="element__image" src={skills} alt="Skills" />
				</div>
				<div className="link__element element">
					<a className="element__link" href="#">
						Profile
					</a>
					<img className="element__image" src={profile} alt="Profile" />
				</div>
				<div className="link__element element">
					<a className="element__link" href="#">
						Contacts
					</a>
					<img className="element__image" src={contacts} alt="Contacts" />
				</div>
			</div>
			<div className="navigation__button button">
				<img className="button__menu" src={navigation} alt="Navigation" />
			</div>
		</div>
	);
}

export default Navbar;

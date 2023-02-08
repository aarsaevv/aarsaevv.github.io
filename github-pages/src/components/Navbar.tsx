import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass";
import back from "../assets/images/back.svg";
import contacts from "../assets/images/contacts.svg";
import home from "../assets/images/home.svg";
import logo from "../assets/images/logo.svg";
import qr from "../assets/images/qr.svg";
import navigation from "../assets/images/button-navigation.svg";
import profile from "../assets/images/profile.svg";
import skills from "../assets/images/skills.svg";
import work from "../assets/images/work.svg";

function Navbar() {
	const [isActive, setIsActive] = useState(false);
	const toggleSidebar = (event: React.MouseEvent) => {
		setIsActive(!isActive);
	};
	const allIDs = Array.from(document.querySelectorAll("[id]"));
	const filteredIDs = allIDs.filter((el) => el.id !== "root");
	if (isActive) {
		filteredIDs.forEach((el) => {
			el.className += " hidden";
		});
	} else {
		filteredIDs.forEach((el) => {
			el.classList.remove("hidden");
		});
	}
	function randomizeLogo() {
		return Math.round(Math.random() * 10) <= 1;
	}
	return (
		<div className="">
			<div className={!isActive ? "navigation" : "hidden"}>
				<Link to="/" className="navigation__logo logo">
					<img
						className="logo__image"
						src={randomizeLogo() ? qr : logo}
						alt="Logo"
					/>
				</Link>
				<div className="navigation__button button" onClick={toggleSidebar}>
					<img className="button__menu" src={navigation} alt="Navigation" />
				</div>
			</div>
			<div className={isActive ? "sidebar" : "hidden"}>
				<div className="sidebar__element element" onClick={toggleSidebar}>
					<img className="element__image" src={back} alt="Back" />
				</div>
				<div className="sidebar__element element">
					<Link to="/" className="element__link" onClick={toggleSidebar}>
						Home
					</Link>
					<img className="element__image" src={home} alt="Home" />
				</div>
				<div className="sidebar__element element" onClick={toggleSidebar}>
					<Link to="/work" className="element__link">
						Work
					</Link>
					<img className="element__image" src={work} alt="Work" />
				</div>
				<div className="sidebar__element element" onClick={toggleSidebar}>
					<Link to="/skills" className="element__link">
						Skills
					</Link>
					<img className="element__image" src={skills} alt="Skills" />
				</div>
				<div className="sidebar__element element" onClick={toggleSidebar}>
					<Link to="/profile" className="element__link">
						Profile
					</Link>
					<img className="element__image" src={profile} alt="Profile" />
				</div>
				<div className="sidebar__element element" onClick={toggleSidebar}>
					<Link to="/contacts" className="element__link">
						Contacts
					</Link>
					<img className="element__image" src={contacts} alt="Contacts" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;

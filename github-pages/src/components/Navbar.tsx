import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass";
import back from "../assets/images/back.svg";
import contacts from "../assets/images/contacts.svg";
import home from "../assets/images/home.svg";
import logo from "../assets/images/logo.svg";
import navigation from "../assets/images/button-navigation.svg";
import profile from "../assets/images/profile.svg";
import qr from "../assets/images/qr.svg";
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
			el.className = "hidden";
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
				<div
					className={
						window.innerWidth > 500 ? "navigation__links link" : "hidden"
					}
				>
					<div className="link__anchor anchor">
						<Link to="/" className="anchor__link">
							Home
						</Link>
						<img className="anchor__image" src={home} alt="Home" />
					</div>
					<div className="link__anchor anchor">
						<Link to="/work" className="anchor__link">
							Work
						</Link>
						<img className="anchor__image" src={work} alt="Work" />
					</div>
					<div className="link__anchor anchor">
						<Link to="/skills" className="anchor__link">
							Skills
						</Link>
						<img className="anchor__image" src={skills} alt="Skills" />
					</div>
					<div className="link__anchor anchor">
						<Link to="/profile" className="anchor__link">
							Profile
						</Link>
						<img className="anchor__image" src={profile} alt="Profile" />
					</div>
					<div className="link__anchor anchor">
						<Link to="/contacts" className="anchor__link">
							Contacts
						</Link>
						<img className="anchor__image" src={contacts} alt="Contacts" />
					</div>
				</div>
				<div className="navigation__button button" onClick={toggleSidebar}>
					<img className="button__menu" src={navigation} alt="Navigation" />
				</div>
			</div>
			<div className={isActive ? "sidebar" : "hidden"}>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<img className="anchor__image" src={back} alt="Back" />
				</div>
				<div className="sidebar__anchor anchor">
					<Link to="/" className="anchor__link" onClick={toggleSidebar}>
						Home
					</Link>
					<img className="anchor__image" src={home} alt="Home" />
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/work" className="anchor__link">
						Work
					</Link>
					<img className="anchor__image" src={work} alt="Work" />
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/skills" className="anchor__link">
						Skills
					</Link>
					<img className="anchor__image" src={skills} alt="Skills" />
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/profile" className="anchor__link">
						Profile
					</Link>
					<img className="anchor__image" src={profile} alt="Profile" />
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/contacts" className="anchor__link">
						Contacts
					</Link>
					<img className="anchor__image" src={contacts} alt="Contacts" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;

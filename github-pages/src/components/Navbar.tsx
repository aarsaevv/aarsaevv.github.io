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
	const [sidebarIsActive, setSidebarIsActive] = useState(false);

	//randomly picks either logo or qr-code
	const randomizeLogo = () => Math.round(Math.random() * 10) <= 1;

	//toggle sidebar in mobile version
	const toggleSidebar = (event: React.MouseEvent) =>
		setSidebarIsActive(!sidebarIsActive);

	//hide all other elements, when sidebar is opened
	(() => {
		const allIDs = Array.from(document.querySelectorAll("[id]"));
		const filteredIDs = allIDs.filter((el) => el.id !== "root");
		if (sidebarIsActive) {
			filteredIDs.forEach((el) => {
				el.className = "hidden";
			});
		} else {
			filteredIDs.forEach((el) => {
				el.classList.remove("hidden");
			});
		}
	})();

	return (
		<div className="">
			<div className={sidebarIsActive ? "hidden" : "navigation"}>
				<Link to="/" className="navigation__logo logo">
					<img
						className="logo__image"
						src={randomizeLogo() ? qr : logo}
						alt="Logo"
					/>
				</Link>
				<div className="navigation__links link">
					<div className="link__anchor anchor">
						<Link to="/" className="anchor__link link">
							Home
							<img className="link__image" src={home} alt="Home" />
						</Link>
					</div>
					<div className="link__anchor anchor">
						<Link to="/works" className="anchor__link link">
							Works
							<img className="link__image" src={work} alt="Work" />
						</Link>
					</div>
					<div className="link__anchor anchor">
						<Link to="/skills" className="anchor__link link">
							Skills
							<img className="link__image" src={skills} alt="Skills" />
						</Link>
					</div>
					<div className="link__anchor anchor">
						<Link to="/profile" className="anchor__link link">
							Profile
							<img className="link__image" src={profile} alt="Profile" />
						</Link>
					</div>
					<div className="link__anchor anchor">
						<Link to="/contacts" className="anchor__link link">
							Contacts
							<img className="link__image" src={contacts} alt="Contacts" />
						</Link>
					</div>
				</div>
				<div className="navigation__button button" onClick={toggleSidebar}>
					<img className="button__menu" src={navigation} alt="Navigation" />
				</div>
			</div>
			<div className={sidebarIsActive ? "sidebar" : "hidden"}>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<img className="anchor__image" src={back} alt="Back" />
				</div>
				<div className="sidebar__anchor anchor">
					<Link to="/" className="anchor__link link" onClick={toggleSidebar}>
						Home
						<img className="link__image" src={home} alt="Home" />
					</Link>
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/works" className="anchor__link link">
						Works
						<img className="link__image" src={work} alt="Work" />
					</Link>
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/skills" className="anchor__link link">
						Skills
						<img className="link__image" src={skills} alt="Skills" />
					</Link>
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/profile" className="anchor__link link">
						Profile
						<img className="link__image" src={profile} alt="Profile" />
					</Link>
				</div>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<Link to="/contacts" className="anchor__link link">
						Contacts
						<img className="link__image" src={contacts} alt="Contacts" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

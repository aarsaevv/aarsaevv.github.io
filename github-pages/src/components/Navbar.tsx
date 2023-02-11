// @ts-nocheck
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

	const links = [
		{
			linkName: "Home",
			linkSrc: home,
			linkAlt: "Home",
			linkPath: "/",
		},
		{
			linkName: "Works",
			linkSrc: work,
			linkAlt: "Works",
			linkPath: "/works",
		},
		{
			linkName: "Skills",
			linkSrc: skills,
			linkAlt: "Skills",
			linkPath: "/skills",
		},
		{
			linkName: "Profile",
			linkSrc: profile,
			linkAlt: "Profile",
			linkPath: "/profile",
		},
		{
			linkName: "Contacts",
			linkSrc: contacts,
			linkAlt: "Contacts",
			linkPath: "/contacts",
		},
	];

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
					{links.map((link) => (
						<div key={link.linkName} className="link__anchor anchor">
							<Link to={link.linkPath} className="anchor__link link">
								{link.linkName}
								<img
									className="link__image"
									src={link.linkSrc}
									alt={link.linkAlt}
								/>
							</Link>
						</div>
					))}
				</div>
				<div className="navigation__button button" onClick={toggleSidebar}>
					<img className="button__menu" src={navigation} alt="Navigation" />
				</div>
			</div>
			<div className={sidebarIsActive ? "sidebar" : "hidden"}>
				<div className="sidebar__anchor anchor" onClick={toggleSidebar}>
					<img className="anchor__image" src={back} alt="Back" />
				</div>
				{links.map((link) => (
					<div
						onClick={toggleSidebar}
						key={link.linkName}
						className="sidebar__anchor anchor"
					>
						<Link to={link.linkPath} className="anchor__link link">
							{link.linkName}
							<img
								className="link__image"
								src={link.linkSrc}
								alt={link.linkAlt}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Navbar;

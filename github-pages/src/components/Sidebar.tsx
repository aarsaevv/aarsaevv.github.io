import "./Sidebar.sass";
import back from "../assets/images/back.svg";
import home from "../assets/images/home.svg";
import work from "../assets/images/work.svg";
import skills from "../assets/images/skills.svg";
import profile from "../assets/images/profile.svg";
import contacts from "../assets/images/contacts.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__element element">
				<img className="element__image" src={back} alt="Back" />
			</div>
			<div className="sidebar__element element">
				<a className="element__link" href="#">
					Home
				</a>
				<img className="element__image" src={home} alt="Home" />
			</div>
			<div className="sidebar__element element">
				<a className="element__link" href="#">
					Work
				</a>
				<img className="element__image" src={work} alt="Work" />
			</div>
			<div className="sidebar__element element">
				<a className="element__link" href="#">
					Skills
				</a>
				<img className="element__image" src={skills} alt="Skills" />
			</div>
			<div className="sidebar__element element">
				<a className="element__link" href="#">
					Profile
				</a>
				<img className="element__image" src={profile} alt="Profile" />
			</div>
			<div className="sidebar__element element">
				<a className="element__link" href="#">
					Contacts
				</a>
				<img className="element__image" src={contacts} alt="Contacts" />
			</div>
		</div>
	);
}

export default Sidebar;

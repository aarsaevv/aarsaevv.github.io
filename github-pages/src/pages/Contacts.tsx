import "./Contacts.sass";
import github from "../assets/images/github-big.svg";
import google from "../assets/images/google-big.svg";
import linkedin from "../assets/images/linkedin-big.svg";
import telegram from "../assets/images/telegram-big.svg";

function Contacts() {
	return (
		<div id="contacts" className="contacts">
			<div className="contacts__header">Contacts</div>
			<div className="contacts__links contact-links">
				<div className="contacts-links__contact-link contact-link">
					<img className="contact-link__image" src={linkedin} alt="linkedin" />
				</div>
				<div className="contacts-links__contact-link contact-link">
					<img className="contact-link__image" src={google} alt="gmail" />
				</div>
				<div className="contacts-links__contact-link contact-link">
					<img className="contact-link__image" src={telegram} alt="telegram" />
				</div>
				<div className="contacts-links__contact-link contact-link">
					<img className="contact-link__image" src={github} alt="github" />
				</div>
			</div>
		</div>
	);
}
export default Contacts;

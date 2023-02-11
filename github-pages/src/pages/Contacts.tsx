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
					<a
						href="https://www.linkedin.com/in/evgeny-arsaev-748226254/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="contact-link__image"
							src={linkedin}
							alt="linkedin"
						/>
					</a>
				</div>
				<div className="contacts-links__contact-link contact-link">
					<a
						href="mailto:arsaevgeny@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<img className="contact-link__image" src={google} alt="gmail" />
					</a>
				</div>
				<div className="contacts-links__contact-link contact-link">
					<a href="https://t.me/evgenyarsaev" target="_blank" rel="noreferrer">
						<img
							className="contact-link__image"
							src={telegram}
							alt="telegram"
						/>
					</a>
				</div>
				<div className="contacts-links__contact-link contact-link">
					<a
						href="https://github.com/aarsaevv"
						target="_blank"
						rel="noreferrer"
					>
						<img className="contact-link__image" src={github} alt="github" />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Contacts;

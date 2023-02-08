import "./Contacts.sass";
import github from "../assets/images/github.svg";
import githubSmall from "../assets/images/github.svg";
import google from "../assets/images/google.svg";
import googleSmall from "../assets/images/google.svg";
import linkedin from "../assets/images/linkedin.svg";
import linkedinSmall from "../assets/images/linkedin.svg";
import telegram from "../assets/images/telegram.svg";
import telegramSmall from "../assets/images/telegram.svg";

function Contacts() {
	return (
		<div id="contacts" className="contacts">
			<div className="contacts__header">Contacts</div>
			<div className="contacts__links links">
				<div className="links__linkedin">
					<img src={linkedin} alt="linkedin" />
				</div>
				<div className="links__gmail">
					<img src={google} alt="gmail" />
				</div>
				<div className="links__telegram">
					<img src={telegram} alt="telegram" />
				</div>
				<div className="links__github">
					<img src={github} alt="github" />
				</div>
			</div>
		</div>
	);
}
export default Contacts;

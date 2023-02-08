import "./Contacts.sass";
import linkedinSmall from "../assets/images/linkedin.svg";
import googleSmall from "../assets/images/google.svg";
import telegramSmall from "../assets/images/telegram.svg";
import githubSmall from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin-big.svg";
import google from "../assets/images/google-big.svg";
import telegram from "../assets/images/telegram-big.svg";
import github from "../assets/images/github-big.svg";

function Contacts() {
	return (
		<div className="contacts">
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

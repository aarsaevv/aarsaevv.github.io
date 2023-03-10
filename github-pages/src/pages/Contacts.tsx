//@ts-nocheck
import { motion } from "framer-motion";
import "./Contacts.sass";
import { blinkingOpacity, blinkingOpacityDuration } from "../helpers.ts";
import github from "../assets/images/github-big.svg";
import google from "../assets/images/google-big.svg";
import linkedin from "../assets/images/linkedin-big.svg";
import telegram from "../assets/images/telegram-big.svg";

function Contacts() {
	return (
		<motion.div
			id="contacts"
			className="contacts"
			initial={{ opacity: 0 }}
			animate={{
				opacity: blinkingOpacity,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{ duration: blinkingOpacityDuration }}
		>
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
						href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=arsaevgeny@gmail.com"
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
		</motion.div>
	);
}
export default Contacts;

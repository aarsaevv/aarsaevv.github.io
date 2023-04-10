import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { blinkingOpacity, blinkingOpacityDuration } from "../helpers"
import "../styles/pages/Profile.sass"
import photo from "../assets/images/photo.png"
import TypewriterAnimation from "../components/TypewriterAnimation"

function Profile() {
	return (
		<motion.div
			id="profile"
			className="profile"
			initial={{ opacity: 0 }}
			animate={{
				opacity: blinkingOpacity,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{ duration: blinkingOpacityDuration }}>
			<div className="profile__header">
				Prof<span>ile</span>
			</div>
			<div className="profile__wrap wrap">
				<img
					className="wrap__photo"
					src={photo}
					alt="that's me"
				/>
				<div className="wrap__credentials credentials">
					<div className="credentials__name">
						<TypewriterAnimation />
					</div>
					<div className="credentials__sphere">I'm a frontend developer</div>
				</div>
			</div>
			<div className="profile__information information">
				<div className="information__block">
					<div className="block__header">Personal data</div>
					<div className="block__description description">
						<ul className="description__list">
							<li>Country: Republic of Kazakhstan</li>
							<li>City: Karaganda</li>
							<li>Age: 26</li>
							<li>Job: Open to work!</li>
							<li>Russian: native</li>
							<li>English: advanced</li>
						</ul>
						Feel free to write me on LinkedIn, Gmail, Telegram <br />
						CHECK MY CONTACTS
						<Link
							to="/contacts"
							className="description__link">
							here
						</Link>
					</div>
				</div>
				<div className="information__block">
					<div className="block__header">About me</div>
					<div className="block__description">
						I was born in 1996 in the city of Komsomolsk-on-Amur in the easternmost part of Russia. Since childhood, I
						was very fond of literature and everything complex, scientific and not so. My friend from here, by the way,
						introduced me to the world of Frontend Development, (Volodya, if you are reading this, respect to you). I
						love to develop fast, light, beautiful and convenient applications for everyday use. I am fond of bicycles,
						animals, playing the guitar and regularly try to find new challenges and master everything in the world. Not
						having much experience, I want to achieve everything myself and help people in a variety of things. And I
						really hope that this will be better than working as a retail salesman.
					</div>
				</div>
				<div className="information__block">
					<div className="block__header">Interests</div>
					<div className="block__description interests">
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.imdb.com/title/tt0175880/"
								target="_blank"
								rel="noreferrer">
								Movies
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=PqbB07n_uQ4"
								target="_blank"
								rel="noreferrer">
								Tech
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=na47wMFfQCo"
								target="_blank"
								rel="noreferrer">
								Music
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=o8CWp8ktFQM"
								target="_blank"
								rel="noreferrer">
								Biking
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=YBnHIZKVQkM"
								target="_blank"
								rel="noreferrer">
								Animals
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="http://www.prodipeguitars.com/nos-produits/guitares-classiques/4296-guitare-classique-primera.html"
								target="_blank"
								rel="noreferrer">
								Guitar
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
export default Profile

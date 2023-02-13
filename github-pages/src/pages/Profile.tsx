import "./Profile.sass";
import photo from "../assets/images/photo.png";
import TypewriterAnimation from "../components/TypewriterAnimation";

function Profile() {
	return (
		<div id="profile" className="profile">
			<div className="profile__header">
				Prof<span>ile</span>
			</div>
			<div className="profile__wrap wrap">
				<img className="wrap__photo" src={photo} alt="that's me" />
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
					<div className="block__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid
						at cupiditate quibusdam temporibus autem tempora dolor nulla
						officiis vero voluptas porro placeat nesciunt debitis ab enim,
						inventore qui dicta. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Nulla vero velit aliquid architecto, dolor
						consequatur. Illum commodi rerum doloremque ab tempora ex, veritatis
						nemo, in dolores cumque eveniet vel laborum!
					</div>
				</div>
				<div className="information__block">
					<div className="block__header">About me</div>
					<div className="block__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos reprehenderit recusandae hic. Minus explicabo ipsam
						voluptatem accusantium? Quisquam exercitationem maiores ipsam
						sapiente dolores autem asperiores quidem ea assumenda nihil ab iure
						consectetur, est accusantium in facere earum consequatur error
						necessitatibus!
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
								rel="noreferrer"
							>
								Movies
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=PqbB07n_uQ4"
								target="_blank"
								rel="noreferrer"
							>
								Tech
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=na47wMFfQCo"
								target="_blank"
								rel="noreferrer"
							>
								Music
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=o8CWp8ktFQM"
								target="_blank"
								rel="noreferrer"
							>
								Biking
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="https://www.youtube.com/watch?v=YBnHIZKVQkM"
								target="_blank"
								rel="noreferrer"
							>
								Animals
							</a>
						</div>
						<div className="interests__tag">
							<a
								className="tag__link"
								href="http://www.prodipeguitars.com/nos-produits/guitares-classiques/4296-guitare-classique-primera.html"
								target="_blank"
								rel="noreferrer"
							>
								Guitar
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Profile;

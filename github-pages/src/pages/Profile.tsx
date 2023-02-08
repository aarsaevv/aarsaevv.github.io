import "./Profile.sass";
import photo from "../assets/images/photo.png";

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
						Hello, my name is Evgeny Arsaev
					</div>
					<div className="credentials__sphere">I'm frontend developer</div>
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
						<div className="interests__tag">Movies</div>
						<div className="interests__tag">Tech</div>
						<div className="interests__tag">Music</div>
						<div className="interests__tag">Biking</div>
						<div className="interests__tag">Animals</div>
						<div className="interests__tag">Guitar</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Profile;

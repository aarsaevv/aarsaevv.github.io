import './App.sass';
import logo from "./assets/images/logo.svg";
import navigation from "./assets/images/button-navigation.svg";
import collapse from "./assets/images/button-collapse.svg";
import cross from "./assets/images/button-cross.svg";
import buttonSmall from "./assets/images/button-small.svg";
import expand from "./assets/images/button-expand.svg";
import back from "./assets/images/back.svg";
import home from "./assets/images/home.svg";
import work from "./assets/images/work.svg";
import skills from "./assets/images/skills.svg";
import profile from "./assets/images/profile.svg";
import contacts from "./assets/images/contacts.svg";


function App() {
  return (
    <div className='container--mobile'>
      <div className="home">
        <div className="navigation">
          <div className="navigation__logo logo">
            <img className='logo__image' src={logo} alt="Logo" />
          </div>
          <div className="navigation__button button">
            <img className='button__menu' src={navigation} alt="Navigation" />
          </div>
        </div>
        <div className="home__image"></div>
        <div className="home__blog-item blog-item">
          <div className="blog-item__header header">
            <div className="header__heading">
              Blog item(1)
            </div>
            <div className="header__button button">
              <div className="button__collapse">
                <img src={collapse} alt="Button" />
              </div>
              <div className="button__cross">
                <img src={cross} alt="Button" />
              </div>
            </div>
          </div>
          <div className="blog-item__body body">
            <div className="body__heading">
              First script
            </div>
            <div className="body__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, quam sed blandit accumsan, mauris leo ultricies.
            </div>
            <div className="body__button">
              <img src={buttonSmall} alt="Go to" />
            </div>
          </div>
        </div>
        <div className="home__blog-item-collapse blog-item-collapse">
        <div className="blog-item__header header">
            <div className="header__heading">
              Blog item(2)
            </div>
            <div className="header__button button">
              <div className="button__collapse">
                <img src={expand} alt="Button" />
              </div>
              <div className="button__cross">
                <img src={cross} alt="Button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__element element">
          <img className='element__image' src={back} alt="Back" />
        </div>
        <div className="sidebar__element element">
          <a className='element__link' href="#">Home</a>
          <img className='element__image' src={home} alt="Home" />
        </div>
        <div className="sidebar__element element">
          <a className='element__link' href="#">Work</a>
          <img className='element__image' src={work} alt="Work" />
        </div>
        <div className="sidebar__element element">
          <a className='element__link' href="#">Skills</a>
          <img className='element__image' src={skills} alt="Skills" />
        </div>
        <div className="sidebar__element element">
          <a className='element__link' href="#">Profile</a>
          <img className='element__image' src={profile} alt="Profile" />
        </div>
        <div className="sidebar__element element">
          <a className='element__link' href="#">Contacts</a>
          <img className='element__image' src={contacts} alt="Contacts" />
        </div>
      </div>
    </div>
  );
}

export default App;

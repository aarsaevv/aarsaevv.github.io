import "./App.sass";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
	return (
		<div className="container--mobile">
			<Navbar />
			<Sidebar />
			<Home />
			<Work />
			<Skills />
			<Profile />
			<Contacts />
		</div>
	);
}
export default App;

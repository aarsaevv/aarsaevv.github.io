import { Route, Routes } from "react-router";
import "./App.sass";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/works" element={<Work />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</div>
	);
}
export default App;

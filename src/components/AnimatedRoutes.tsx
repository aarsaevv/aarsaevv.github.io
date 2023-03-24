import { Route, Routes, useLocation } from "react-router-dom";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Skills from "../pages/Skills";
import Work from "../pages/Work";

function AnimatedRoutes() {
	const location = useLocation();
	console.log(location);
	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Home />} />
			<Route path="/works" element={<Work />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/contacts" element={<Contacts />} />
		</Routes>
	);
}

export default AnimatedRoutes;

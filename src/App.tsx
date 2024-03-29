import {Route, Routes} from "react-router"
import {useLocation} from "react-router"
import {AnimatePresence} from "framer-motion"
import "./styles/global/App.sass"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Skills from "./pages/Skills"
import Profile from "./pages/Profile"
import Contacts from "./pages/Contacts"

function App() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <div className="container">
                <Navbar key="navbar"/>
                <AnimatePresence exitBeforeEnter>
                    <Routes
                        location={location}
                        key={location.pathname}>
                        <Route
                            path="/"
                            element={<Home/>}
                        />
                        <Route
                            path="/works"
                            element={<Work/>}
                        />
                        <Route
                            path="/skills"
                            element={<Skills/>}
                        />
                        <Route
                            path="/profile"
                            element={<Profile/>}
                        />
                        <Route
                            path="/contacts"
                            element={<Contacts/>}
                        />
                    </Routes>
                </AnimatePresence>
            </div>
        </AnimatePresence>
    )
}

export default App

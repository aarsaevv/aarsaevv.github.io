import {motion} from "framer-motion"
import {BLINKING_OPACITY, BLINKING_OPACITY_DURATION} from "../constants"
import "../styles/pages/Home.sass"
import eye from "../assets/images/eye.gif"
import welcome from "../assets/images/welcome.gif"
import {IS_WELCOME_GIF_SHOWED} from "../constants"

const Home = () =>
    <div
        id="home"
        className="home">
        <div className="home__image image">
            <motion.img
                className="image__main"
                src={IS_WELCOME_GIF_SHOWED ? welcome : eye}
                alt="Welcome"
                initial={{opacity: 0}}
                animate={{
                    opacity: BLINKING_OPACITY,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{duration: BLINKING_OPACITY_DURATION}}
            />
        </div>
    </div>

export default Home
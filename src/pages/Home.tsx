import { motion } from "framer-motion";
import { blinkingOpacity, blinkingOpacityDuration } from "../helpers";
import "./Home.sass";
import welcome from "../assets/images/welcome.gif";

function Home() {
  return (
    <div id="home" className="home">
      <div className="home__image image">
        <motion.img
          className="image__main"
          src={welcome}
          alt="Welcome"
          initial={{ opacity: 0 }}
          animate={{
            opacity: blinkingOpacity,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: blinkingOpacityDuration }}
        />
      </div>
    </div>
  );
}
export default Home;

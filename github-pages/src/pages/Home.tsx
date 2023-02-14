// @ts-nocheck
import { motion } from "framer-motion";
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
						opacity: [1, Math.random(), Math.random(), Math.random(), 1],
					}}
					exit={{
						opacity: 0,
					}}
					transition={{ duration: 0.5 }}
				/>
			</div>
		</div>
	);
}
export default Home;

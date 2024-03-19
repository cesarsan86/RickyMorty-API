import React from "react";
import Card from "./card.js";
import Characters from "../component/charactersContainer.js";
import Location from "../component/locationContainer.js";
import Episode from "../component/episodeContainer.js";
import "../../styles/home.css";

const Home = () => {

	return (
		<main className="container">
			
			<section>
				<h1>Characters</h1>
				<Characters />
			</section>

			<section>
				<h1>Location</h1>
				<Location />
			</section>

			<section>
				<h1>Episode</h1>
				<Episode />
			</section>

		</main >
	)
};

export default Home;
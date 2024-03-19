import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import Home from "./views/home.js";
import CharacterDescription from "./views/character-description.js";
import LocationDescription from "./views/location-description.js";
import EpisodeDescription from "./views/episode-description.js";
import Navbar from "./component/navbar.js";
import injectContext from "./store/appContext.js";



const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/:id" element={<CharacterDescription />} />
						<Route path="/location/:id" element={<LocationDescription />} />
						<Route path="/episode/:id" element={<EpisodeDescription/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

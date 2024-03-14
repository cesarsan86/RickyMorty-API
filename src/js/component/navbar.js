import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext.js";

const Navbar = () => {

	const contexto = useContext(Context);
	
	function eliminarFavoritos(nombre) {
		contexto.actions.deleteFavoritos(nombre);
		
	  }




	return (
		<nav>
			<header className="container">
				<Link to="/"><img className="imagen-logo" src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" /></Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"data-bs-auto-close="outside" aria-expanded="false">
						<span>Favorites</span>
						<span className="favoritos-counter">{contexto.store.favoritos.length}</span>
					</button>
					
					<ul className="dropdown-menu">
						{contexto.store.favoritos.length === 0 ? "(empty)" : contexto.store.favoritos.map((value, index) => (
							<li className="dropdown-item" key={index}>
								<span className="favoritos-name">{value}</span>
								<i className="fa fa-trash m-2" onClick={()=>eliminarFavoritos(value)}></i>
							</li>
						))}
					</ul>
				</div>
			</header>
		</nav>
	);
};

export default Navbar;

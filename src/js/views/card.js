import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {

	const [verificarFav, setVerificarFav] = useState(false);
	const contexto = useContext(Context);

	function agregarFavoritos() {
		contexto.actions.addFavoritos(props.nombre);
	}

	/*useEffect(() => {
		setVerificarFav(contexto.actions.verificarFavorito(props.nombre));
	}, [contexto.store.favoritos])*/

	

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..."/>

			
		
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`${props.type}/${props.id}`} className="btn btn-outline-primary">Learn more!</Link>
					<button type="button" className="btn btn-outline-warning fa fa-2x fa-heart  mt-1 me-1" onClick={agregarFavoritos}>
						{verificarFav ? (
							<i className="fa fa-2x fa-heart mt-1 me-1"></i>
						) : (
							<i className="bi bi-suit-heart"></i>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card;
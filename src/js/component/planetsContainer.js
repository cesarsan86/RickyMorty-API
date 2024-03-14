import React, { useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Llama a la acción fetchCharacters solo si no hay personajes cargados
        if (store.vehicles.length === 0) {
            actions.addPlanets();
        }
    }, [actions, store.vehicles]);

    return (
        <div className="contenedor-cards">
            {store.planets && store.planets.length > 0 ? (
                store.planets.map((value, index) => (
                    <Card
                        nombre={value.name}
                        key={index}
                        id={value.uid}
                        type={"planets"}
                        addFavoritos={() => actions.addFavoritos(value)}
                        isFavorito={actions.verificarFavorito(value)}
                    />
                ))
            ) : (
                <p>Cargando planets...</p>
            )}
        </div>
    );
};

export default Planets;
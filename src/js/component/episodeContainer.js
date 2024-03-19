import React, { useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Episode = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Llama a la acción fetchCharacters solo si no hay personajes cargados
        if (store.episode.length === 0) {
            actions.addEpisodes();
        }
    }, [actions, store.episode]);

    return (
        <div className="contenedor-cards">
            {store.episode && store.episode.length > 0 ? (
                store.episode.map((value, index) => (
                    <Card
                        
                        
                        nombre={value.name}
                        air_date={value.air_date}
                        episode={value.episode}
                        created={value.created}
                        key={index}
                        id={value.uid}
                        type={"episode"}
                        addFavoritos={() => actions.addFavoritos(value)}
                        isFavorito={actions.verificarFavorito(value)}
                    />
                ))
            ) : (
                <p>Cargando Episodes...</p>
            )}
        </div>
    );
};

export default Episode;
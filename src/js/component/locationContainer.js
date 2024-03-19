import React, { useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";

import "../../styles/cardContainer.css";

const Location = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Llama a la acción fetchCharacters solo si no hay ubicaciones cargadas
        if (store.location.length === 0) {
            actions.addLocation();
        }
    }, [actions, store.location]);

    return (
        <div className="contenedor-cards">
            {store.location && store.location.length > 0 ? (
                store.location.map((value, index) => (
                    <Card
                        
                        nombre={value.name}
                        dimension={value.dimension}
                        created={value.created}
                        key={index}
                        id={value.uid}
                        type={"location"}
                        addFavoritos={() => actions.addFavoritos(value)}
                        isFavorito={actions.verificarFavorito(value)}
                    />
                ))
            ) : (
                <p>Cargando Location...</p>
            )}
        </div>
    );
};

export default Location; 
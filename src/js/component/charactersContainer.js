import React, { useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
       
        if (store.characters.length === 0) {
            actions.addCharacters();
        }
    }, [actions, store.characters]);

    return (
        <div className="contenedor-cards">
            {store.characters && store.characters.length > 0 ? (
                store.characters.map((value, index) => (
                    <Card
                        image={value.image}
                        nombre={value.name}
                        status={value.status}
                        species={value.species}
                        gender={value.gender}
                        key={index}
                        id={value.uid}
                        type={"characters"}
                        addFavoritos={() => actions.addFavoritos(value)}
                        isFavorito={actions.verificarFavorito(value)}
                        
             

                    />
                ))
            ) : (
                <p>Cargando personajes...</p>
            )}
        </div>
    );
};

export default Characters;
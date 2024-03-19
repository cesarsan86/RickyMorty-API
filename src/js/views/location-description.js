import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/description.css";

const LocationDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

    async function solicitarData() {
        const respose = await fetch("https://rickandmortyapi.com/api/location/" + id);
        const data = await respose.json();
        const result = data.result.properties;
        const result2 = data.result.description;
        setPropiedades(result);
        setDescripcion(result2);
        console.log(data.result)
    }

    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-principal-location">
            <div className="d-flex flex-column align-items-center container contenedor-descripcion">
                
                <div className="text-center">
                    <h2 className="text-warning">{propiedades.name}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="container contenedor-propiedades text-center">
                <div className="row"> 

                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">                   
                        <div className="text">
                            <p>Name</p>
                            <p>{propiedades.name}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Type</p>
                            <p>{propiedades.type}</p>
                        </div>
                    </div> 
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">   
                        <div className="text">
                            <p>Dimension</p>
                            <p>{propiedades.dimension}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Residents</p>
                            <p>{propiedades.residents}</p>
                        </div>
                    </div>
            
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Created</p>
                            <p>{propiedades.created}</p>
                        </div>
                    </div>    
                </div>    
            </div>

        </div>    
        
    )
}

export default LocationDescription;
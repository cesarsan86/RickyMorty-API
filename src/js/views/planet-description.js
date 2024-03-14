import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/description.css";

const PlanetDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

    async function solicitarData() {
        const respose = await fetch("https://swapi.tech/api/planets/" + id);
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
        <div className="contenedor-principal-planets">
            <div className="d-flex flex-column align-items-center container contenedor-descripcion">
                <img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..."/>
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
                            <p>Climate</p>
                            <p>{propiedades.climate}</p>
                        </div>
                    </div> 
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">   
                        <div className="text">
                            <p>Population</p>
                            <p>{propiedades.population}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Orbital Period</p>
                            <p>{propiedades.orbital_period}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Rotation Period</p>
                            <p>{propiedades.rotation_period}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Diameter</p>
                            <p>{propiedades.diameter}</p>
                        </div>
                    </div>    
                </div>    
            </div>

        </div>    
        
    )
}

export default PlanetDescription;
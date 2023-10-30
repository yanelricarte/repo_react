import React from "react";
import "./MiComponente.css";
import img from "./img/harry.jpg";

function MiComponente(){
    return(
        <div className="contenedor">
            <h1 className="titulo"> Bienvenidos a nuestro sitio web </h1>
            <p className="parrafo"> Ejemplo react JSX</p>
            <div className="contenedor_imagen">
            <img src={img} alt="Imagen de personaje"/>
            </div>
            <img src="/images/harry.jpeg" alt="harry potter desde public"/>
            </div>
    )
}

export default MiComponente;
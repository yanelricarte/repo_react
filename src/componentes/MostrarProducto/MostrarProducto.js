import React from "react";
import { useParams } from "react-router-dom";

const productos = [
            { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1' },
            { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2' },
            { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3' },
        
    ]
    
    function MostrarProducto(){

    const { id } = useParams();
    const producto = productos.find(item => item.id === parseInt(id));
    return(
        <>
            <h1> Mostrar Producto {id} </h1>
            <h2> Mostrar Producto {producto.nombre} </h2>
            <h2> Mostrar Producto {producto.descripcion} </h2>


        </>
    )
}

export default MostrarProducto;
import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; 

function NavBar(){
    return(
        <nav className="navbar">
        <Link to="/producto/2"> Ver Producto </Link> 
        <Link to="/listaProductos"> Lista Productos </Link> 
        <Link to="/registro"> Registro </Link> 
        <Link to="/login"> Login </Link> 



            </nav>
    )
}

export default NavBar;
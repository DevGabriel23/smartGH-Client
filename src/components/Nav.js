import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";
import logo from "../elements/Logo.png"

function Navbar(){
    return (
        <nav className='nav'>
            <NavLink to="/"><img src={logo} className="logo"/></NavLink>
            <NavLink className="text" to='/'>Inicio</NavLink>
            <NavLink className="text" to='/home'>Dashboard</NavLink>
            {/* <NavLink className="text" to='/login'>Iniciar Sesion</NavLink> */}
            {/* <NavLink className="text" to='/register'>Registro</NavLink> */}
            <NavLink className="text" to='/home/history'>Historial</NavLink>
            <NavLink className="text" to='/home/stats'>Estadística</NavLink>
        </nav>
    );
}

export default Navbar;
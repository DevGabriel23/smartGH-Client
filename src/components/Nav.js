import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'><h2>Inicio</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home'><h2>Inicio</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/login'><h2>Inicio Sesion </h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/register'><h2>Registro </h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home/history'><h2>Historial</h2></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home/stats'><h2>Estadística</h2></NavLink>
            
        </ul>

    );
}

export default Navbar;
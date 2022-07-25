import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import PrivateRoutes from '../components/PrivateRoute';
import PublicRoutes from './PublicRoutes';

export default function PrincipalRoute(){
    const isLogged = false;
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route
                    path={isLogged ? '/home' : '/login'}
                    element={isLogged ? <Home/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import { Navigate,Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import Login from "../pages/Login";

export default function PublicRoutes({isLogged}) {

    return isLogged ? <Navigate to='/home' /> : <Route path='/login' element={<Login/>} />

}



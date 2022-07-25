import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Login from "../pages/Login";

export default function ApplicationRouter() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/history' element={<History/>} />
        </Routes>
    )
}

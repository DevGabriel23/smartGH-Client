import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import History from './pages/History';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Nav';
import Stats from './pages/Stats';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exat path="/" element={<LandingPage />} />
          <Route exat path="/login" element={<Login />} />
          <Route exat path="/register" element={<Register />} />
          <Route exact path="/home" element={<PrivateRoute component={Home} />} />
          <Route exact path="/home/history" element={<PrivateRoute component={History} />} />
          <Route exact path="/home/stats" element={<PrivateRoute component={Stats} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

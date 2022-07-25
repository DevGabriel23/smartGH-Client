import React from 'react'
import { Navigate } from 'react-router-dom'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const PrivateRoute = ({ component: Component }) => {
    
    let auth = "false";
    auth = localStorage.getItem('auth');

return auth==="true" ? <Component/> : <Navigate to="/login" />;
};

export default PrivateRoute
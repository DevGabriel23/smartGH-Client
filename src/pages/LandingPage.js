import React from "react"
import { NavLink, Link} from "react-router-dom"
import { Button, colors, Subtitle, Title } from "../elements/styledComponent"

export default function LandingPage(){

    return(
        <div className="containerLP">
            <div className="lpUno">
                <Title color={colors.greenDark}>Bienvenido a Smart GreenHouse</Title>
                <Subtitle color={colors.greenLight}>Tecnología al cuidado del ambiente</Subtitle>
                <div className="buttons">
                    <Link to="/login"><Button tone="dark" style={{width:"22vh", margin:"25px"}}>Iniciar sesión</Button></Link>
                    <Link to="/register"><Button tone="light" style={{width:"22vh", margin:"25px"}}>Registrarse</Button></Link>
                </div>
            </div>
            <div className="lpDos">
                <img className="img" src="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" /> 
            </div>
            <div className="wave" style={{zIndex:"-100", position:"relative", bottom:"100px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colors.brown} fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,138.7C672,96,768,64,864,69.3C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div style={{backgroundColor:`${colors.brown}`, height:"100vh", bottom:"110px", position:"relative"}}>

            </div>
        </div>  
    )
}
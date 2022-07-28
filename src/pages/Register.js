import React from "react";
import {colors ,Form, Input, Label, Title, Span, GroupInput, ButtonContainer, Button } from "../elements/styledComponent";
import '../App.css';
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Register (){

    localStorage.removeItem('auth');

    var qs = require('qs');
    let data;
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const register = (e) =>{
        e.preventDefault();

        data = qs.stringify({
            'METHOD': 'REGISTER',
            'user': user,
            'pass': pass
        });

        axios({
            url: "http://192.168.11.9/api/login.php",
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }).then((response) => {
            if(response.data != null){
                alert("Usuario: "+user+"\nPassword: "+pass);
                window.location = "/login";
            }else{
                alert("Ya se ha registrado un usuario\nNúmero máximo de usuario: 1");
            }
        })
    }

    return (
    <div style={{maxHeight: "1vh"}}>
        <div className="lpUno" style={{margin: "0"}}>
            <div className="form-container">
                <Title color={colors.greenDark}>Register</Title>
                <Form>
                    <GroupInput>
                        <Input type="text" name="user" required onChange={(e) => setUser(e.target.value)}/><Span></Span>
                        <Label>Username</Label>
                    </GroupInput>
                    <GroupInput>
                        <Input type="text" name="email" required /><Span></Span>
                        <Label>E-mail</Label>
                    </GroupInput>
                    <GroupInput>
                        <Input type="password" name="pass" required onChange={(e) => setPass(e.target.value)}/><Span></Span>
                        <Label>Password</Label>
                    </GroupInput>
                    <ButtonContainer>
                        <Button type="submit" value="ingresar" tone="light" className="send-button" onClick={register}>Send</Button>
                    </ButtonContainer>
                    <p>¿Ya tienes cuenta? <Link to="/login" style={{color: `${colors.greenDark}` }}>Inicia sesión</Link></p>
                </Form> 
            </div>
        </div>
        <div className="wave" style={{position: "relative", bottom:"330px", zIndex:"-100"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colors.brown} fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,138.7C672,96,768,64,864,69.3C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </div>
    )
}
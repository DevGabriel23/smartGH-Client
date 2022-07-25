import React, { useState } from "react";
import {colors ,Form, Input, Label, Title, Span, GroupInput, ButtonContainer, Button } from "../elements/styledComponent";
import '../App.css';
import axios from "axios";

export default function Login (){

    localStorage.removeItem('auth');

    var qs = require('qs');
    let data, auth;
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const login = (e) =>{
        e.preventDefault();
        data = qs.stringify({
            'METHOD': 'LOGIN',
            'user': user,
            'pass': pass
        });

        axios({
            url: "http://192.168.0.9/api/login.php",
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }).then((response) => {
            if(response.data != null){
                auth = true;
                window.location = "/home";
            }else{
                auth = false;
                alert("Inicio fallido");
            }
            localStorage.setItem('auth', auth);
        })
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
    }

    return (
        <div>
            <div className="form-container">
                <Title color={colors.greenDark}>Login</Title>
                <Form>
                    <GroupInput>
                        <Input type="text" id="user" required onChange={(e) => setUser(e.target.value)}/><Span></Span>
                        <Label>Username</Label>
                    </GroupInput>
                    <GroupInput>
                        <Input type="password" id="pass" required onChange={(e) => setPass(e.target.value)}/><Span></Span>
                        <Label>Password</Label>
                    </GroupInput>
                    <ButtonContainer>
                        <Button type="submit" value="ingresar" tone="light" className="send-button" onClick={login}>Send</Button>
                    </ButtonContainer>
                </Form> 
            </div>
        </div>
    )
}
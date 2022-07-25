import React from "react";
import {colors ,Form, Input, Label, Title, Span, GroupInput, ButtonContainer, Button } from "../elements/styledComponent";
import '../App.css';
import { useState } from "react";
import axios from 'axios';

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
            url: "http://192.168.0.9/api/login.php",
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
        <div>
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
                </Form> 
            </div>
        </div>
    )
}
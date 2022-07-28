import React, { useEffect, useState } from "react"
import { Subtitle, Title } from "../elements/styledComponent"
import "../App.css"
import axios from "axios";

export default function Home(){

    const[datos,setDatos] = useState([]);


    let data;
    let temp, hum, humS, nivelAgua, bomba, day, month, year, time;

    const peticionGetDatos = () =>{
        data = "?table=datos";
        axios({
            url: "http://192.168.11.9/api/index.php"+data,
            method: 'get',
            headers: { },
        }).then((response) => {
            if(response.data != null){
                // console.log(response.data)
                setDatos(response.data);
            }
        })
    }

    const getUltimoDato = () => {
        if(datos[datos.length-1] != null){
            let ultimo = datos.length-1
            console.log(datos[ultimo]);
            temp = datos[ultimo].temperatura;
            hum = datos[ultimo].humedad;
            humS = datos[ultimo].humedadSuelo;
            nivelAgua = datos[ultimo].nivelAgua;
            bomba = datos[ultimo].estadoBomba;
            year = datos[ultimo].datetime.substring(0,4);
            month = datos[ultimo].datetime.substring(5,7);
            day = datos[ultimo].datetime.substring(8,10);
            time = datos[ultimo].datetime.substring(11,19);
        }
    }

    useEffect(()=>{
        peticionGetDatos();
    },[]);

    return(
        <div>
            <Title>Últimas medidas</Title>
            {getUltimoDato()}
            <Subtitle>Temperatura ambiental: {temp}°C</Subtitle>
            <Subtitle>Humedad ambiental: {hum}%</Subtitle>
            <Subtitle>Humedad de suelo: {humS}%</Subtitle>
            <Subtitle>Nivel de agua: {nivelAgua}%</Subtitle>
            <Subtitle>Estado de la bomba: {bomba === 1 ? "Encendido" : "Apagada"}</Subtitle>
            <Subtitle>Ultima medición: {day+"-"+month+"-"+year+" "+time}</Subtitle>
        </div>  
    )
}
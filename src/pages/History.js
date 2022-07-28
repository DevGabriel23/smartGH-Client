import React , { useEffect, useState } from "react"
import { Subtitle, TableContainer, Title, Table} from "../elements/styledComponent"
import axios from "axios";

export default function History(){
    let data;

    const [datos,setDatos] = useState([]);
    const [riegos,setRiegos] = useState([]);

    useEffect(()=>{
        getRiegos();
        getDatos();
    },[])

    const getRiegos = () =>{
        data = "?table=riego";
        axios({
            url: "http://192.168.11.9/api/index.php"+data,
            method: 'get',
            headers: { },
        }).then((response) => {
            if(response.data != null){
                setRiegos(response.data);
            }
        })
    }

    const getDatos = () =>{
        data = "?table=datos";
        axios({
            url: "http://192.168.11.9/api/index.php"+data,
            method: 'get',
            headers: { },
        }).then((response) => {
            if(response.data != null){
                setDatos(response.data);
            }
        })
    }

        return(
        <div>
        <Title>Historial</Title>
        <Subtitle>A continuación información detallada de lo que sucedió mientras no estabas</Subtitle>
        <TableContainer name={"outerWrapper"}>
        <TableContainer name={"tableWrapper"}>
            <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha y Hora</th>
                    <th>Temperatura (°C)</th>
                    <th>Humedad (%)</th>
                    <th>Humedad del suelo (%)</th>
                    <th>Nivel de agua (%)</th>
                    <th>Estado de la bomba</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((element, index) =>{
                    return(
                        <tr key={index}>
                            <td>{element['id']}</td>
                            <td>{element['datetime']}</td>
                            <td>{element['temperatura']}</td>
                            <td>{element['humedad']}</td>
                            <td>{element['humedadSuelo']}</td>
                            <td>{element['nivelAgua']}</td>
                            <td>{element['estadoBomba'] === 1 ? "Encendida" : "Apagada"}</td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        </TableContainer>
    </TableContainer>

    <TableContainer name={"outerWrapper"}>
        <TableContainer name={"tableWrapper"}>
            <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Humedad del suelo (%)</th>
                    <th>Nivel de agua (%)</th>
                    <th>Estado de la bomba</th>
                </tr>
            </thead>
            <tbody>
                {riegos.map((element, index) =>{
                    return(
                    <tr key={index}>
                            <td>{element['id']}</td>
                            <td>{element['fecha']}</td>
                            <td>{element['hora']}</td>
                            <td>{element['nivelAgua']}</td>
                            <td>{element['estadoBomba'] === 1 ? "Encendida" : "Apagada"}</td>
                    </tr>
                    )
                })}
            </tbody>
            </Table>
        </TableContainer>
    </TableContainer>
</div>
)}


import axios from "axios"
import { useState } from "react";

export const getDatos = async () => {
    const[datos, setDatos] = useState([])
    let data = "?table=datos";
    axios({
        url: "http://192.168.11.9/api/index.php" + data,
        method: 'get',
        headers: {},
    }).then((response) => {
        if (response.data != null) {
            setDatos(response.data);
        }
    })
}

export const getRegado = async () => {
    const[riegos, setRiegos] = useState([])
    let data = "?table=riego";
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
export const getDatos = async () => {
    data = "?table=datos";
    axios({
        url: "http://192.168.0.9/api/index.php" + data,
        method: 'get',
        headers: {},
    }).then((response) => {
        if (response.data != null) {
            setDatos(response.data);
        }
    })
}

export const getRegado = async () => {
    data = "?table=riego";
        axios({
            url: "http://192.168.0.9/api/index.php"+data,
            method: 'get',
            headers: { },
        }).then((response) => {
            if(response.data != null){
                setRiegos(response.data);
            }
        })
}
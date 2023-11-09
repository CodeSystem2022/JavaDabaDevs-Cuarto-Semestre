import axios from "axios";

const cliente  = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
});

export default cliente;

//ARCHIVO VERIFICADO AL VIDEO 6 - CORRECTO
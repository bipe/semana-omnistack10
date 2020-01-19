import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333', //como estamos usando dispositivo real, copiamos ip da pagina do expo E USAMOS A PORTA USADA NO BACKEND.
});

export default api;
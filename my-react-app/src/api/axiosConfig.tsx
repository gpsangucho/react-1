import axios from 'axios';

const api = axios.create({
baseURL: 'https://nestjs-blob-backend.desarrollo-software.xyz',// 'http://localhost:3000/api', // Cambia esta URL a la de tu backend
timeout: 10000,
headers: {
'Content-Type': 'application/json',
},
});

export default api;
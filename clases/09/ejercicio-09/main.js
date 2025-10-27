const PORT = 3000;
/* MISION 1
import http from 'http'

const server = http.createServer((req, res) => {
    // Código de estado HTTP 
    res.statusCode = 200;
    // Configuramos el tipo de contenido 
    res.setHeader('Content-Type', 'text/plain');
    // Enviamos la respuesta 
    res.end('Hola, mundo!');
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 
*/

//MISION 2
import express from 'express';

const app = express(); 

app.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}`); 
});

app.get('/', (req, res) => { 
    res.send('Hola, mundo desde Express!'); 
}); 

app.get('/ping', (req, res) => { 
    res.send('pong'); 
}); 
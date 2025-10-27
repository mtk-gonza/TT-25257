import express from 'express';

const PORT = 3000;

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
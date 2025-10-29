import { app } from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { 
    res.send(`
        Bienvenido a la API REST del ejercicio 10

        Endpoints:
        - GET /api/users
        - GET /api/products
    `); 
}); 

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
import { Router } from 'express';

export const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenido</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
          background-color: #f5f5f5;
        }
        h1 {
          color: #333;
        }
        .endpoints {
          margin-top: 20px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>¡Bienvenido a la API REST del Ejercicio 10!</h1>
      <div class="endpoints">
        <p>Endpoints disponibles:</p>
        <p><a href="/api/users">/api/users</a></p>
        <p><a href="/api/products">/api/products</a></p>
      </div>
    </body>
    </html>
  `);
});
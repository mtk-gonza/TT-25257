mi-api-rest/
│
├── src/
│   ├── controllers/            ← Lógica de manejo de peticiones
│   │   └── user_controller.js
│   ├── routes/                 ← Definición de rutas
│   │   └── user_routes.js
│   ├── models/                 ← Modelos de datos (si usas una base de datos)
│   │   └── User.js             ← (opcional, si usas BD)
│   ├── services/               ← Lógica de negocio
│   │   └── user_service.js
│   ├── middleware/             ← Funciones intermedias (autenticación, validación, etc.)
│   ├── utils/                  ← Funciones auxiliares
│   ├── config/                 ← Configuración (variables de entorno, conexión a BD, etc.)
│   └── app.js                  ← Configuración principal de Express
│
├── .env                        ← Variables de entorno
├── package.json
├── main.js                     ← Punto de entrada (arranca el servidor)
└── README.md
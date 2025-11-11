# Cuestionario 12

## La separación de responsabilidades en una arquitectura por capas es estrictamente necesaria para el funcionamiento de una aplicación.
a) Falso        ✅
b) Verdadero    ❌

## El prefijo '/api' en las rutas como app.use('/api', productsRouter) se utiliza principalmente para:
a) Crear versiones diferentes de la misma API                   ❌
b) Ocultar las rutas reales a los usuarios                      ❌
c) Bloquear accesos no autorizados                              ❌
d) Organización estética y para optimizar la búsqueda de rutas  ✅

## Los servicios en una API REST encapsulan:
a) La lógica de negocio de la aplicación    ✅
b) La configuración del servidor            ❌
c) Los métodos HTTP permitidos              ❌
d) Los endpoints disponibles                ❌

## ¿Cuál es la principal función de Express Router?
a) Servir archivos estáticos                                    ❌
b) Permitir crear manejadores de rutas modulares y montables    ✅
c) Conectar con bases de datos                                  ❌
d) Manejar errores de la aplicación                             ❌

## Cmpleta la frase
El código dentro de los controladores debe encargarse de "RECIBIR SOLICITUDES DESDE LAS RUTAS" y "GESTIONAR LAS RESPUESTAS".

## Al migrar lógica desde los controladores a los servicios, los controladores se limitan a:
a) Manejar la autenticación y autorización                                          ❌
b) Recibir información de la solicitud, invocar servicios y responder al cliente    ✅
c) Definir la estructura de los datos                                               ❌
d) Manipular directamente la base de datos                                          ❌

## ¿Cuál de las siguientes NO es una ventaja de usar Express Router?
a) Mejora la organización del código                    ❌
b) Aumenta la velocidad de procesamiento del servidor   ✅
c) Facilita la reutilización de conjuntos de rutas      ❌
d) Permite versionado de APIs                           ❌

## En una arquitectura basada en capas, el flujo de datos entre rutas, controladores y servicios es:
a) Servicio → Controlador → Ruta    ❌
b) Ruta → Servicio → Controlador    ❌
c) Controlador → Ruta → Servicio    ❌
d) Ruta → Controlador → Servicio    ✅

## Los controladores en una API REST se encargan de:
a) Gestionar solicitudes HTTP, interactuar con la lógica de negocio y generar respuestas    ✅
b) Definir la estructura de las tablas en la base de datos                                  ❌
c) Inicializar el servidor Express                                                          ❌
d) Modularizar las rutas de la aplicación                                                   ❌

## La sentencia app.use('/api', productsRouter) en el archivo principal:
a) Crea un nuevo router para productos                      ❌
b) Integra el router de productos con el prefijo "/api"     ✅
c) Genera automáticamente rutas CRUD para productos         ❌
d) Define variables de entorno para la aplicación           ❌
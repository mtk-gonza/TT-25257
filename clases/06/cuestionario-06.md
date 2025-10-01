# Cuestionario 06

## Completa la frase
En el uso de Fetch, para manejar una solicitud POST con un cuerpo de datos, se puede agregar un objeto de configuración con la propiedad method configurada como "POST". Este objeto también puede incluir el encabezado Content-Type para especificar el tipo de los datos, y la propiedad body con los datos a enviar, que deben estar en formato JSON.

## ¿Cuál es la principal ventaja del asincronismo en JavaScript?
a) Permitir que las tareas de larga duración no bloqueen el programa principal. ✅
b) Reducir el número de líneas de código.                                       ❌
c) Ejecutar todo el código en un solo hilo.                                     ❌
d) Ejecutar el código de manera síncrona.                                       ❌

## ¿Qué hace la función fetch() en JavaScript?
a) Crea una promesa que siempre se resuelve exitosamente.   ❌
b) Ejecuta un bloque de código asíncrono.                   ❌
c) Realiza una solicitud HTTP a un servidor web.            ✅
d) Envía datos a una base de datos local.                   ❌

## ¿Cuál de los siguientes describe correctamente el funcionamiento del Event Loop en JavaScript?
a) Bloquea la ejecución del código hasta que se completa una tarea asincrónica.                 ❌
b) Llama a las funciones en la Call Stack en orden aleatorio.                                   ❌
c) Ejecuta todas las funciones sincrónicas de manera simultánea.                                ❌
d) Se encarga de ejecutar las funciones de la Callback Queue cuando la Call Stack está vacía.   ✅

## Completa la frase
En JavaScript, las promesas pueden tener dos estados finales: RESOLVED cuando la tarea se completa exitosamente, y REJECTED cuando ocurre un error.

## ¿Qué palabra clave se usa para declarar una función asincrónica en JavaScript?
a) async    ✅
b) callback ❌
c) promise  ❌
d) await    ❌

## ¿Qué método de una promesa se utiliza para manejar errores?
a) resolve()    ❌
b) then()       ❌
c) finally()    ❌
d) catch()      ✅

## ¿Cuál de las siguientes afirmaciones sobre la diferencia entre Fetch y Axios es correcta?
a) Fetch tiene más opciones para manejar errores que Axios.                                                 ❌
b) Axios solo funciona en navegadores modernos.                                                             ❌
c) Axios es más lento que Fetch.                                                                            ❌
d) Axios convierte automáticamente las respuestas en JSON, mientras que Fetch requiere hacerlo manualmente. ✅

## ¿Qué método de Fetch se utiliza para convertir una respuesta a formato JSON?
a) .parse() ❌
b) .json()  ✅
c) .text()  ❌
d) .xml()   ❌

## ¿Qué método de una promesa se ejecuta al finalizar la promesa, independientemente de si se resolvió o rechazó?
a) .catch()     ❌
b) .resolve()   ❌
c) .then()      ❌
d) .finally()   ✅
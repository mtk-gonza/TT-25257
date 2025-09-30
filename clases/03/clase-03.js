//index              0          1         2          3
const ALUMNOS = ['Leonardo', 'Cesar', 'Mariano', 'Martin']
console.log(`Array inicial: ${ALUMNOS}`)
console.log(`Index 1: ${ALUMNOS[1]}`) // Cesar

ALUMNOS.push('Cosme') // Leonardo, Cesar, Mariano, Martin, Cosme (Lo agrega al final)
console.log(`Se implementa el metodo ".push" quedando asi: ${ALUMNOS}`)

ALUMNOS.unshift('Fulanito') //Fulanito, Leonardo, Cesar, Mariano, Martin, Cosme (Lo agrega al principio)
console.log(`Se implementa el metodo ".unshift" quedando asi: ${ALUMNOS}`)

ALUMNOS.pop()// Fulanito, Leonardo, Cesar, Mariano, Martin (Elimina el ultimo)
console.log(`Se implementa el metodo ".pop" quedando asi: ${ALUMNOS}`)

ALUMNOS.shift()// Leonardo, Cesar, Mariano, Martin (Elimina el primero)
console.log(`Se implementa el metodo ".shift" quedando asi: ${ALUMNOS}`) 

console.log(`Se implementa el metodo ".join(' - ')" quedando asi: ${ALUMNOS.join(' - ')}`)// Leonardo - Cesar - Mariano - Martin

console.log(`Se implementa el metodo ".length" para saber la longitud: ${ALUMNOS.length}`) //Para saber la longitud: 4

const numeros = [2, 4, 6, 8, 10]
// Un .forEach ejecuta una funcion por cada elemento del array
console.log(`Array numeros: ${numeros}`)
console.log(`Se aplica "numeros.forEach(n => console.log(n))" y hace lo siguiente:`)
numeros.forEach(n => console.log(n))
// Un .map hace lo mismo que el ".forEach" pero nos devuelve un array nuevo
const doble = numeros.map(n => n*2)
console.log(`Asignamos a una variable "numeros.map(n => n*2)" y da como resultado: ${doble}`)
// un .filter() crea un nuevo array con elementos que pasan la prueba
const numeros_filtrados = numeros.filter(n => n >= 6)
console.log(`Asignamos a una variable "numeros.filter(n => n >= 4)" y da como resultado: ${numeros_filtrados}`)
// un .reduce() recorre y acumula los valores
const suma = numeros.reduce((acum, num) => acum + num, 0)
console.log(`Asignamos a una variable "numeros.reduce((acum, num) => acum + num, 0)" y da como resultado: ${suma}`)
console.log('1');

const show = (callback, delay = 1000) => {
    setTimeout(() => {
        callback()
    }, delay)
}

console.log('2');

show(() => {console.log('3')})

console.log('4');

//Promesas
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Tarea asincronica completada.')
        } else {
            reject(new Error('Tarea asincronica fallida.'))
        }
    }, 1000)
})

promesa
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('final'))

const readline = require('readline') 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pedirNombre = () => {
    return new Promise((resolve, reject) => {
        rl.question('👉 Ingresá tu nombre: ', (respuesta) => {
            if (respuesta && respuesta.trim().length > 2) {
                resolve(`Bienvenido/a, ${respuesta}! 💪`);                
            } else {
                reject('❌ Error: debes ingresar un nomber válido (min 2 caracteres)')
            }
        })
    })
}

const ejePedirNombre = () => {
    pedirNombre()
        .then(mensaje => console.log(mensaje))
        .catch(error => console.error(error))
        .finally(() => rl.close())
}

//show(ejePedirNombre, 3000)

// async/await
const ejeAsyncPedirNombre = async () => {
    try {
        const res = await pedirNombre()
        console.log(res)
    } catch (error) {
        console.error(error)
    } finally {
        rl.close()
        console.log('final')
    }
}
ejeAsyncPedirNombre()
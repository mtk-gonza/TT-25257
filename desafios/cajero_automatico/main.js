const readline = require('readline');

const PIN_CORRECTO = '1590';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
}

async function menu(saldoInicial = 1000000) {
    let saldo = saldoInicial;
    let salir = false;

    function getBalance() {
        console.log(`💰 Su saldo actual es: $${saldo}`);
    }

    async function withdraw() {
        const retiro = parseFloat(await preguntar('Ingrese monto a retirar: '));
        if (isNaN(retiro) || retiro <= 0) {
            console.log('⚠️ Monto inválido.');
        } else if (retiro > saldo) {
            console.log('❌ Fondos insuficientes.');
        } else {
            saldo -= retiro;
            console.log(`✅ Retiro exitoso. Su nuevo saldo es $${saldo}`);
        }
    }

    async function deposit() {
        const deposito = parseFloat(await preguntar('Ingrese monto a depositar: '));
        if (isNaN(deposito) || deposito <= 0) {
            console.log('⚠️ Monto inválido.');
        } else {
            saldo += deposito;
            console.log(`✅ Depósito exitoso. Su nuevo saldo es $${saldo}`);
        }
    }

    while (!salir) {
        console.log('\n=== Menú del Cajero ===');
        console.log('a) Consultar saldo');
        console.log('b) Retirar dinero');
        console.log('c) Depositar dinero');
        console.log('d) Salir');

        const opcion = await preguntar("\nSeleccione una opción: ");

        switch (opcion.toLowerCase()) {
            case 'a':
                getBalance();
                break;

            case 'b':
                await withdraw();
                break;

            case 'c':
                await deposit();
                break;

            case 'd':
                salir = true;
                console.log('\n👋 Gracias por usar nuestro cajero. ¡Hasta pronto!');
                break;

            default:
                console.log('⚠️ Opción inválida, intente de nuevo.');
        }
    }
}

async function main() {
    let intentos = 0;
    let exito = false;

    console.log('Bienvenid@ al Cajero Automático.');

    while (intentos < 3) {
        const pinIngresado = await preguntar('Ingrese su PIN: ');

        if (pinIngresado === PIN_CORRECTO) {
            console.log('✅ PIN correcto. Acceso concedido.');
            console.log('Bienvenid@ a la gestión de usuario.');
            await menu();
            exito = true;
            break;
        } else {
            console.log('❌ PIN incorrecto.');
            intentos++;
        }
    }

    if (!exito) {
        console.log('🚫 Se acabaron los intentos. Acceso denegado.');
        console.log('Por favor comuníquese con el banco.');
    }

    rl.close();
}

main();
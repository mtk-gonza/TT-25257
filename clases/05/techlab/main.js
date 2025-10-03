import { ask, rl } from './src/cli/prompt.js';
import { crudMenu } from './src/cli/crudMenu.js';

const main = async () => {
    while (true) {
        console.clear();
        console.log('=== Techlab CRUD terminal ===');
        try {
            const input = await ask('Ingrese el comando (GET, POST, PUT, DELETE o EXIT): ');

            if (input.trim().toUpperCase() === 'EXIT') {
                console.log('Saliendo del programa. ¡Hasta luego!');
                break;
            }

            const result = crudMenu(input);

            if (result.type === 'table') {
                console.table(result.data);
            } else {
                console.log(result.text);
            }

            console.log('\n--- Presione ENTER para continuar ---');
            await ask('');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    rl.close();
};

main();
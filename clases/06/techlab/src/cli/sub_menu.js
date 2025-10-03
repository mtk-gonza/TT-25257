import { ask } from './prompt.js';

export const showSubMenu = async () => {
    console.log('\n--- Elija método ---');
    const input = await ask('Ingrese: async o promesas (o "volver" para regresar): ');
    const cmd = input.trim().toLowerCase();

    if (cmd === 'volver') return null;
    if (cmd === 'async') return 'async';
    if (cmd === 'promesas') return 'promises';

    console.log('❌ Opción no válida. Use: async, promesas o volver.');
    return await showSubMenu();
};
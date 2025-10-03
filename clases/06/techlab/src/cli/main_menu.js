import { ask } from './prompt.js';

export const showMainMenu = async () => {
    const input = await ask('Ingrese: personajes, ubicaciones, episodios o exit: ');
    const cmd = input.trim().toLowerCase();

    if (cmd === 'exit') return 'exit';
    if (cmd === 'personajes') return 'characters';
    if (cmd === 'ubicaciones') return 'locations';
    if (cmd === 'episodios') return 'episodes';

    return null;
};
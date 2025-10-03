import { ask, rl } from './src/cli/prompt.js';
import { showMainMenu } from './src/cli/main_menu.js';
import { showSubMenu } from './src/cli/sub_menu.js';

const main = async () => {
    while (true) {
        console.clear();
        console.log('=== Rick and Morty CLI ===');
        console.log('Elija una categoría:\n');

        const category = await showMainMenu();

        if (category === 'exit') {
            console.log('¡Hasta luego!');
            break;
        }

        if (!category) {
            console.log('\n❌ Categoría no válida.');
            console.log('\n--- Presione ENTER para continuar ---');
            await ask('');
            continue;
        }

        const method = await showSubMenu();
        if (!method) continue;

        await executeAction(category, method);
    }

    rl.close();
};

async function executeAction(category, method) {
    try {
        let data = [];

        if (category === 'characters') {
            if (method === 'async') {
                const { fetchCharactersAsync } = await import('./src/services/character_service.js');
                data = await fetchCharactersAsync();
            } else {
                const { fetchCharactersPromises } = await import('./src/services/character_service.js');
                data = await fetchCharactersPromises();
            }
            console.table(data.map(c => ({ id: c.id, name: c.name, status: c.status, species: c.species })));

        } else if (category === 'locations') {
            if (method === 'async') {
                const { fetchLocationsAsync } = await import('./src/services/location_service.js');
                data = await fetchLocationsAsync();
            } else {
                const { fetchLocationsPromises } = await import('./src/services/location_service.js');
                data = await fetchLocationsPromises();
            }
            console.table(data.map(l => ({ id: l.id, name: l.name, type: l.type, dimension: l.dimension })));

        } else if (category === 'episodes') {
            if (method === 'async') {
                const { fetchEpisodesAsync } = await import('./src/services/episode_service.js');
                data = await fetchEpisodesAsync();
            } else {
                const { fetchEpisodesPromises } = await import('./src/services/episode_service.js');
                data = await fetchEpisodesPromises();
            }
            console.table(data.map(e => ({ id: e.id, name: e.name, episode: e.episode, air_date: e.air_date })));
        }

    } catch (error) {
        console.error('\n❌ Error al cargar los datos:', error.message);
    }

    console.log('\n--- Presione ENTER para volver al menú ---');
    await ask('');
}

main();
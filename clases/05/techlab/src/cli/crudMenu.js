export const crudMenu = (input) => {
    const parts = input.split(' ');
    const command = parts[0]?.toUpperCase();

    switch (command) {
        case 'GET':
            return 'Toma un dato';

        case 'POST': {
            const data = parts.slice(1).join(' ');
            return `Recibimos ${data} satisfactoriamente`;
        }

        case 'PUT': {
            const id = parts[1];
            if (id === undefined) return 'PUT requiere un ID';
            return `Modificamos el item con id: ${id} satisfactoriamente`;
        }

        case 'DELETE': {
            const id = parts[1];
            if (id === undefined) return 'DELETE requiere un ID';
            return `El item con el id: ${id} se eliminó con éxito`;
        }

        default:
            return 'Comando no reconocido. Use: GET, POST, PUT o DELETE';
    }
};
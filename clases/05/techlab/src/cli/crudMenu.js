import {
    readProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    readProductById
} from './../services/product_service.js';

export const crudMenu = (input) => {
    const parts = input.trim().split(' ');
    const command = parts[0]?.toUpperCase();

    switch (command) {
        case 'GET': {
            const products = readProducts();
            if (products.length === 0) {
                return { type: 'message', text: 'No hay productos.' };
            }
            return { type: 'table', data: products };
        }

        case 'POST': {
            if (parts.length < 3) {
                return { type: 'error', text: 'Uso: POST <nombre> <precio> (ej: POST Laptop 1200)' };
            }
            const name = parts[1];
            const price = parts[2];
            try {
                const product = createProduct(name, price);
                return { type: 'message', text: `Producto creado: ID ${product.id}, ${product.name} - $${product.price}` };
            } catch (err) {
                return { type: 'error', text: 'Error al crear el producto.' };
            }
        }

        case 'PUT': {
            if (parts.length < 4) {
                return { type: 'error', text: 'Uso: PUT id "nombre" precio (ej: PUT 1 Laptop 1300)' };
            }
            const id = parts[1];
            const name = parts[2];
            const price = parts[3];

            if (!readProductById(id)) {
                return { type: 'error', text: `Producto con ID ${id} no encontrado.` };
            }

            try {
                const product = updateProduct(id, name, price);
                return { type: 'message', text: `Producto actualizado: ID ${product.id}, ${product.name} - $${product.price}` };
            } catch (err) {
                return { type: 'error', text: 'Error al actualizar el producto.' };
            }
        }

        case 'DELETE': {
            if (parts.length < 2) {
                return { type: 'error', text: 'Uso: DELETE id (ej: DELETE 1)' };
            }
            const id = parts[1];

            if (!readProductById(id)) {
                return { type: 'error', text: `Producto con ID ${id} no encontrado.` };
            }

            try {
                deleteProduct(id);
                return { type: 'message', text: `Producto con ID ${id} eliminado.` };
            } catch (err) {
                return { type: 'error', text: 'Error al eliminar el producto.' };
            }
        }

        default:
            return {
                type: 'error',
                text: 'Comando no reconocido. Use: GET, POST, PUT, DELETE o EXIT'
            };
    }
};
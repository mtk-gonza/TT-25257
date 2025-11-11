import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'data', 'products.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}


const writeProducts = (products) => {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
};

export const createProduct = (data) => {
    const products = getAllProducts();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const thumbnail = `https://example.com/${data.name}.jpg`
    const newProduct = { id: newId, ...data, thumbnail: thumbnail };
    products.push(newProduct);
    writeProducts(products);
    return newProduct;
};

export const getAllProducts = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);
    return products
};

export const getProductById = (id) => {
    const products = getAllProducts();
    const product = products.find(p => p.id === Number(id));
    return product
};

export const getProductDynamic = (query, data) => {
    const products = getAllProducts();
    let product
    switch (query.toLowerCase()) {
        case "name":
            product = products.find(p => p.name.toLowerCase() === data.toLowerCase());
            break;
        case "price":
            product = products.find(p => p.price === Number(data));
            break;
        case "stock":
            product = products.find(p => p.stock === Number(data));
            break;
        case "id":
            product = products.find(p => p.id === Number(data));
            break;
        default:
            product = null
    }

    return product
};

export const getProductsByFilters = (filters) => {
    const products = getAllProducts();
    return products.filter(product => {
        for (const [key, value] of Object.entries(filters)) {
            if (key === 'name') {
                if (!product.name || product.name.toLowerCase() !== value.toLowerCase()) {
                    return false;
                }
            } else if (key === 'price' || key === 'stock' || key === 'id') {
                const numValue = Number(value);
                if (isNaN(numValue) || product[key] !== numValue) {
                    return false;
                }
            }
        }
        return true;
    });
};

export const updateProduct = (id, updateData) => {
    const products = getAllProducts();
    const index = products.findIndex(p => p.id === Number(id));
    if (index === -1) return null;
    const thumbnail = `https://example.com/${updateData.name}.jpg`
    products[index] = { ...products[index], name: updateData.name, price: Number(updateData.price), thumbnail };
    writeProducts(products);
    return products[index];
};

export const deleteProduct = (id) => {
    const products = getAllProducts();
    const initialLength = products.length;
    const filtered = products.filter(p => p.id !== Number(id));
    if (filtered.length === initialLength) return false;

    writeProducts(filtered);
    return true;
};
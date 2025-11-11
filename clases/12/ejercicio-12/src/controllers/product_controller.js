import * as productService from '../services/product_service.js';

export const createProduct = async (req, res) => {
    const data = req.body;
    try {
        const product = await productService.createProduct(data);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getProductById = async (req, res) => {
    const { product_id } = req.params;
    try {
        const product = await productService.getProductById(product_id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getProductDynamic = (req, res) => {
    try {
        const { name, price, stock, id, ...unknown } = req.query;
        const validFilters = { name, price, stock, id };
        const filtersToUse = {};
        let hasValidFilter = false;
        for (const [key, value] of Object.entries(validFilters)) {
            if (value !== undefined && value !== null && value !== '') {
                filtersToUse[key] = value;
                hasValidFilter = true;
            }
        }
        if (!hasValidFilter) {
            return res.status(400).json({
                error: 'Debe proporcionar al menos un filtro: name, price, stock o id'
            });
        }
        const products = productService.getProductsByFilters(filtersToUse);

        if (products.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        if (products.length === 1) {
            return res.json(products[0]);
        }
        res.json(products);
    } catch (err) {
        console.error('Error en getProductDynamic:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const updateProductById = async (req, res) => {
    const { product_id } = req.params;
    const updateData = req.body;
    try {
        const updatedProduct = await productService.updateProduct(product_id, updateData);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteProductById = async (req, res) => {
    const { product_id } = req.params;
    try {
        const deletedProduct = await productService.deleteProduct(product_id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }
        res.json(deletedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
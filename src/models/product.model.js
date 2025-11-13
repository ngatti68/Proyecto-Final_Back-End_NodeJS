import fileService from '../services/fileService.js';

const FILENAME = 'products.json';

const findAll = async () => await fileService.readJson(FILENAME);

const findById = async (id) => {
    const products = await fileService.readJson(FILENAME);
    return products.find(p => p.id === id);
};

const findByCategory = async (category) => {
    const products = await fileService.readJson(FILENAME);
    return products.filter(p => p.category?.toLowerCase() === category.toLowerCase());
};

const create = async (data) => {
    const products = await fileService.readJson(FILENAME);
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: data.name,
        price: data.price,
        category: data.category
    };
    products.push(newProduct);
    await fileService.writeJson(FILENAME, products);
    return newProduct;
};

const deleteById = async (id) => {
    const products = await fileService.readJson(FILENAME);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    await fileService.writeJson(FILENAME, products);
    return true;
};

export default {
    findAll,
    findById,
    findByCategory,
    create,
    deleteById
};
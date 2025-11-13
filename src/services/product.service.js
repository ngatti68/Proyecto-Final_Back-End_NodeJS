// products.service.js 
import * as productService from "../models/products.model.js";

export const getAllProducts = () => { 
    return productService.getAllProducts(); 
}; 

export const getProductById = async (id) => { 
    return productService.getProductById(id); 
};

export const getProductByCategory = async (category) => { 
    return productService.getProductByCategory(category); 
}; 

export const createProduct = async (productData) => { 
    const { name, price } = productData;
    return productService.saveProduct(name, price); 
}; 

export const deleteProduct = async (id) => { 
    return productService.deleteProduct(id); 
};
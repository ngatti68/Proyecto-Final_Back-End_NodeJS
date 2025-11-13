import { Router } from 'express';
import {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    createProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/category/:category', getProductsByCategory);
router.post('/create', createProduct);
router.delete('/:id', deleteProduct);

export default router;
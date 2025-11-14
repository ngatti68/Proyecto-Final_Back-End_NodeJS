import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middlewares.js'
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
router.post('/create', authenticateToken, createProduct);
router.delete('/:id', authenticateToken, deleteProduct);

export default router;
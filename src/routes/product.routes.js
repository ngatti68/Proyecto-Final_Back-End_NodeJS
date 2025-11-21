import { Router } from 'express';
import { authenticate, authorize } from '../middlewares/auth.middlewares.js'
import {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct    
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/category/:category', getProductsByCategory);
router.post('/create', authenticate, authorize(['admin']), createProduct);
router.put('/:id', authenticate, authorize(['admin']), updateProduct);
router.delete('/:id', authenticate, authorize(['admin']), deleteProduct);

export default router;
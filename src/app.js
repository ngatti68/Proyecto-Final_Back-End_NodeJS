import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import bodyParserMiddleware from './middlewares/bodyParser.js';
import corsMiddleware from './middlewares/cors.js';
import notFoundMiddleware from './middlewares/notFound.js';

dotenv.config();

const app = express();

app.use(bodyParserMiddleware);
app.use(corsMiddleware);

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API de productos funcionando correctamente' });
});

app.use(notFoundMiddleware);

export default app;
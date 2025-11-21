import fileService from '../src/services/fileService.js';
import { setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../src/models/firebase.js';

const COLLECTION_NAME = 'products';

const migrateProducts = async () => {
    const products = await fileService.readJson('products.json');

    let migrated = 0;
    let skippedById = 0;
    let skippedByDuplicate = 0;

    for (const product of products) {
        const docId = String(product.id);
        const normalizedCategory = product.category?.toLowerCase().trim();
        
        const ref = doc(db, COLLECTION_NAME, docId);
        const existingById = await getDoc(ref);
        if (existingById.exists()) {
            console.log(`Ya existe un producto con ID ${docId}. Omitido: ${product.name}`);
            skippedById++;
            continue;
        }
        
        const q = query(
            collection(db, COLLECTION_NAME),
            where('name', '==', product.name),
            where('category', '==', normalizedCategory)
        );
        const existingByNameCategory = await getDocs(q);
        if (!existingByNameCategory.empty) {
            console.log(`Producto duplicado por nombre y categoría. Omitido: ${product.name} (${normalizedCategory})`);
            skippedByDuplicate++;
            continue;
        }
        
        const normalizedProduct = {
            ...product,
            category: normalizedCategory
        };

        await setDoc(ref, normalizedProduct);
        console.log(`Producto migrado: ${product.name} → ID: ${docId}`);
        migrated++;
    }

    console.log('\n Resumen de migración:');
    console.log(`Migrados: ${migrated}`);
    console.log(`Omitidos por ID duplicado: ${skippedById}`);
    console.log(`Omitidos por nombre/categoría duplicada: ${skippedByDuplicate}`);
    console.log('Migración finalizada');
};

migrateProducts();
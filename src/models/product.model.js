import { collection, getDocs, getDoc, doc, query, where, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase.js';

const COLLECTION_NAME = 'products';

const findAll = async () => {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const findById = async (id) => {
    const ref = doc(db, COLLECTION_NAME, id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

const findByCategory = async (category) => {
    const q = query(collection(db, COLLECTION_NAME), where('category', '==', category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const create = async (data) => {
    const docId = String(data.id);
    const normalizedData = { ...data, category: data.category.toLowerCase() };
    const ref = doc(db, COLLECTION_NAME, docId);

    const existingDoc = await getDoc(ref);
    if (existingDoc.exists()) {
        throw new Error(`El producto con ID ${docId} ya existe`);
    }

    await setDoc(ref, normalizedData);
    return { id: docId, ...normalizedData };
};



const updateById = async (id, data) => {
    const ref = doc(db, COLLECTION_NAME, id);
    await updateDoc(ref, data);
    const snapshot = await getDoc(ref);
    return { id: snapshot.id, ...snapshot.data() };
};

const deleteById = async (id) => {
    const ref = doc(db, COLLECTION_NAME, id);
    await deleteDoc(ref);
    return true;
};

export default {
    findAll,
    findById,
    findByCategory,
    create,
    updateById,
    deleteById
};
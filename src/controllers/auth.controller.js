// src/controllers/auth.controller.js
import jwt from 'jsonwebtoken';
import fileService from '../services/fileService.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const users = await fileService.readJson('users.json');

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
# 🛒 Proyecto Final Integrador – API REST para Tienda Online

Este proyecto forma parte del curso **Back-End / Node.js** de **Talento Tech**, y consiste en el desarrollo de una **API RESTful** que simula el backend de una tienda en línea. Fue construido utilizando **Node.js** y **Express.js**, aplicando los principios fundamentales del desarrollo backend y la arquitectura cliente-servidor.

## 🎯 Objetivos del Proyecto

- Implementar una API REST que gestione productos, usuarios y pedidos.
- Comprender el funcionamiento del protocolo **HTTP**, sus métodos y códigos de estado.
- Capturar y responder solicitudes a través de **endpoints** definidos, interpretando correctamente los parámetros y el cuerpo de las peticiones.
- Aplicar el principio de **división de responsabilidades**, separando la lógica de negocio en **controladores** y **servicios**.
- Utilizar **módulos** y **librerías** internas y externas para extender la funcionalidad del proyecto.
- Modelar el acceso a datos desde archivos **JSON locales** o servicios en la nube como **Firestore**, comprendiendo sus diferencias con bases de datos tradicionales.
- Configurar una capa de **autenticación** para proteger el sistema bajo estándares modernos de seguridad, utilizando herramientas como **JWT** o **Firebase Auth**.

## 🧱 Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (para desarrollo)
- [Firestore](https://firebase.google.com/products/firestore) (opcional)
- [JWT](https://jwt.io/) o [Firebase Authentication](https://firebase.google.com/products/auth)
- JSON como fuente de datos local

## 📁 Estructura del proyecto

store-core-api/
├── index.js
├── .env
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── controllers/
│   ├── firebase/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── services/

- **controllers/**: Lógica de manejo de solicitudes y respuestas.
- **services/**: Lógica de negocio y acceso a datos.
- **routes/**: Definición de rutas y endpoints.
- **data/**: Archivos JSON con datos simulados.
- **middlewares/**: Funciones intermedias como validaciones o manejo de errores.
- **auth/**: Configuración de autenticación y protección de rutas.

## 🚀 Funcionalidades Principales

- CRUD de productos
- Gestión de usuarios
- Manejo de pedidos
- Validación de datos
- Middleware de errores
- Autenticación con JWT o Firebase
- Uso de variables de entorno

## 📦 Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ngatti68/Proyecto-Final_Back-End_NodeJS.git
   cd proyecto-final

2. Instalar dependencias
    ```bash
    npm install

3. Configurar variables de entorno
    
    Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias, por ejemplo:
    ```bash
    PORT=3000
    JWT_SECRET=tu_clave_secreta

4. Ejecutar el servidor en modo desarrollo
    ```bash
    npm run dev

5. Acceder a la API

    Una vez iniciado el servidor, podés acceder a la API en:

    ```bash
    http://localhost:3000
    ```



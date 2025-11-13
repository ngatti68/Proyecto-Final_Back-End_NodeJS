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
├── src/
│   ├── app
│   ├── controllers/
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

## Clona el repositorio:

   git clone https://github.com/ngatti68/Proyecto-Final_Back-End_NodeJS.git
   cd proyecto-final

## Instalar dependencias

    npm install

## Configurar variables de entorno

    Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias, por ejemplo:

    PORT=3000
    FRONTEND_URL=http://localhost:5173

## Ejecutar el servidor en modo desarrollo

    npm run dev

## Acceder a la API

    Una vez iniciado el servidor, podés acceder a la API en:

    http://localhost:3000

## Endpoints

| Método | Ruta                        | Descripción                         | Protegida | Body requerido |
|--------|-----------------------------|-------------------------------------|-----------|----------------|
| GET    | /                           | Obtener todos los productos         | No        | No             |
| GET    | /:id                        | Obtener producto por ID             | No        | No             |
| GET    | /category/:category         | Obtener productos por categoría     | No        | No             |
| POST   | /create                     | Crear nuevo producto                | Sí        | Sí             |
| DELETE | /:id                        | Eliminar producto por ID            | Sí        | No             |

## 📬 Documentación de Endpoints para Postman

**🟢 Obtener todos los productos**

**Método:** `GET /products`

**Descripción:** Obtiene todos los productos disponibles.

```
URL: `http://localhost:3000/products` 

Headers: No requiere
Body: No requiere
Protegido: ❌ No
```

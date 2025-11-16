# 🧩 Proyecto Final Integrador – Back-End Node.js | Talento Tech

## 📘 Descripción general

Este proyecto forma parte del **Trabajo Final Integrador** del trayecto Back-End con Node.js del programa **Talento Tech**.

Consiste en el desarrollo de una **API RESTful** para una tienda en línea, construida con **Node.js** y **Express.js**, que permite gestionar recursos mediante solicitudes HTTP, aplicando los principios fundamentales de la arquitectura cliente-servidor.

A lo largo del desarrollo se implementaron conceptos clave como:

- Diseño de endpoints con rutas predefinidas, lectura de parámetros y manejo de códigos de respuesta.

- Separación de responsabilidades mediante **controladores**, **servicios** y **modelos**, siguiendo una estructura modular y escalable.

- Consumo de datos desde archivos locales en formato **JSON** y desde servicios en la nube como **Firebase** Firestore, comprendiendo su diferencia con bases de datos tradicionales.

- Configuración de una capa de **autenticación** para garantizar la seguridad del sistema, alineada con estándares actuales.

## 🚀 Características principales

Esta **API RESTful** fue diseñada con foco en la modularidad, la escalabilidad y la seguridad. A lo largo del desarrollo se implementaron las siguientes funcionalidades clave:

- 🧭 Gestión de recursos mediante endpoints **HTTP** (`GET`, `POST`, `PUT` y `DELETE`) para operaciones **CRUD**.

- 🧱 Arquitectura modular con separación de responsabilidades en controladores, servicios, modelos y rutas.

- 🔐 Autenticación de usuarios con validación de credenciales y generación de **tokens JWT**.

- ☁️ Persistencia de datos en **Firebase Firestore**, con lógica desacoplada para facilitar futuras migraciones.

- 🛡️ Manejo centralizado de errores, con respuestas claras y consistentes para distintos escenarios.

- 📦 Configuración segura mediante variables de entorno (`.env`) para credenciales y claves sensibles.

- 📄 Documentación clara del flujo de trabajo, decisiones técnicas y estructura del proyecto.

- 🧪 Validaciones de entrada para asegurar la integridad de los datos recibidos por la API.

- 🔄 Sincronización entre capas que permite mantener la lógica limpia y fácilmente testeable.

## 🛠️ Tecnologías utilizadas

Este proyecto fue desarrollado utilizando herramientas modernas del ecosistema JavaScript, priorizando la modularidad, la seguridad y la escalabilidad.

### 🧩 Core del proyecto

- `Node.js` - Entorno de ejecución para **JavaScript** en el servidor.
- `Express.js` - **Framework minimalista** para construir la API RESTful.

### ☁️ Persistencia de datos

- `Firebase Firestore` - **Base de datos NoSQL** en la nube, utilizada para almacenar y consultar datos de forma escalable.

### 🔐 Seguridad y autenticación

- `jasonwebtoken (JWT)` - Generación y verificación de **tokens para autenticación**.

### 📦 Utilidades y configuración

- `dotenv` - Manejo de variables de entorno para proteger credenciales y configuraciones sensibles.
- `cors` - Configuración de políticas de acceso entre dominios.

### 🧪 Validación y manejo de errores

- Middleware personalizado para manejo centralizado de errores.

## Instalación

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/ngatti68/Proyecto-Final_Back-End_NodeJS.git
    ```
2.  Navegar al directorio del proyecto:
    ```bash
    cd Proyecto-Final_Back-End_NodeJS
    ```
3.  Instalar las dependencias:
    ```bash
    npm install
    ```

## Ejecución

- **Iniciar el servidor:**
  ```bash
  npm start
  ```
- **Iniciar en modo de desarrollo (con reinicio automático):**
  ```bash
  npm run dev
  ```

## 🔍 Diagrama de arquitectura

![Diagrama de arquitectura](./docs/assets/diagrama_arquitectura.png)

### Este diagrama muestra cómo se conectan los controladores, servicios y Firestore.

## 📡 Endpoints de la API

La siguiente tabla resume los principales endpoints disponibles en la API, organizados por recurso y método HTTP:

| Método | Ruta                      | Descripción                       | Autenticación |
| ------ | ------------------------- | --------------------------------- | ------------- |
| GET    | `/api/products`           | Obtiene todos los productos       | No            |
| GET    | `/api/products/:id`       | Obtiene un producto por ID        | No            |
| GET    | `/api/products/:category` | Obtiene un producto por categoria | No            |
| POST   | `/api/products/create`    | Crea un nuevo producto            | Sí            |
| PUT    | `/api/products/:id`       | Actualiza un producto existente   | Sí            |
| DELETE | `/api/products/:id`       | Elimina un producto por ID        | Sí            |
| POST   | `/auth/login`             | Inicia sesión y genera token JWT  | No            |

🔐 Los endpoints marcados con “Sí” en la columna de autenticación requieren un token JWT válido en el encabezado `Authorization` .

## 📦 Endpoints de Productos

1. `GET/api/products`

**Descripción:** Obtiene todos los productos disponibles.

**Autenticación:** ❌ No requerida

### Ejemplo de petición:

```bash
GET /api/products
```

### Ejemplo de respuesta:

```bash
[
  {
    "id": 7,
    "name": "Router TP-Link Archer AX10",
    "price": 85,
    "category": "Redes"
  },
  {
    "id": 8,
    "name": "Impresora HP DeskJet 2775",
    "price": 110,
    "category": "Oficina"
  }
]
```

2. `GET/api/products/:id`

**Descripción:** Obtiene un producto específico por su ID.

**Autenticación:** ❌ No requerida

### Ejemplo de petición:

```bash
GET /api/products/2
```

### Ejemplo de respuesta:

```bash
{
    "id": 2,
    "name": "Monitor Samsung 24 pulgadas",
    "price": 180,
    "category": "Tecnología"
}
```

3. `GET/api/products/:category`

**Descripción:** Obtiene productos filtrados por categoría.

**Autenticación:** ❌ No requerida

### Ejemplo de petición:

```bash
GET /api/products/tecnología
```

### Ejemplo de respuesta:

```bash
[
  {
    "id": 1,
    "name": "Notebook Lenovo",
    "price": 1200,
    "category": "Tecnología"
  },
  {
    "id": 2,
    "name": "Monitor Samsung 24 pulgadas",
    "price": 180,
    "category": "Tecnología"
  }
]
```

4. `POST/api/products/:create`

**Descripción:** Crea un nuevo producto.

**Autenticación:** ✅ Requiere token JWT

### Ejemplo de petición:

```bash
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
    "id": 2,
    "name": "Monitor Samsung 24 pulgadas",
    "price": 180,
    "category": "Tecnología"
}
```

### Ejemplo de respuesta:

```bash
{
    "id": 2,
    "name": "Monitor Samsung 24 pulgadas",
    "price": 180,
    "category": "Tecnología"
    "message": "Producto creado exitosamente"
}
```

5. `PUT/api/products/:id`

**Descripción:** Actualiza los datos de un producto existente.

**Autenticación:** ✅ Requiere token JWT

### Ejemplo de petición:

```bash
PUT /api/products/1
Authorization: Bearer <token>
Content-Type: application/json

{
  "price": 1200
}
```

### Ejemplo de respuesta:

```bash
{
    "id": 1,
    "name": "Notebook Lenovo",
    "price": 1200,
    "category": "Tecnología"
    "message": "Producto actualizado correctamente"
}
```

6. `DELETE/api/products/:id`

**Descripción:** Elimina un producto por su ID.

**Autenticación:** ✅ Requiere token JWT

### Ejemplo de petición:

```bash
DELETE /api/products/1
Authorization: Bearer <token>
```

### Ejemplo de respuesta:

```bash
{
  "message": "Producto eliminado exitosamente"
}
```

## 🔐 Endpoint de Autenticación

7. `POST/auth/login`

**Descripción:** Inicia sesión y genera un token JWT.

**Autenticación:** ❌ No requerida

### Ejemplo de petición:

```bash
POST /auth/login
Content-Type: application/json

{
    "username": "admin",
    "password": "123456"
}
```

### Ejemplo de respuesta:

```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
}
```

## ⚠️ Manejo de errores

La API contempla el manejo de errores mediante respuestas estructuradas y códigos de estado HTTP apropiados. Esto permite una comunicación clara con el cliente y facilita el debugging.

### 🧭 Tipos de errores y respuestas

| Código | Tipo de error         | Descripción                                                    | Ejemplo de respuesta                            |
| ------ | --------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| 400    | Bad Request           | La petición contiene datos inválidos o está mal formada.       | `{"error":"Datos inválidos en la solicitud"}`   |
| 401    | Unauthorized          | El token de autenticación está ausente o es inválido.          | `{"error":"Token no proporcionado o inválido"}` |
| 403    | Forbidden             | El usuario no tiene permisos para acceder al recurso.          | `{"error":"Acceso denegado"}`                   |
| 404    | Not Found             | La ruta no existe o el recurso solicitado no fue encontrado.   | `{"error":"Recurso no encontrado"}`             |
| 500    | Internal Server Error | Error inesperado en el servidor o fallo en servicios externos. | `{"error":"Error interno del servidor"}`        |

### 🛡️ Comportamiento esperado

- Las rutas no definidas devuelven un error 404 con un mensaje claro.
- Las operaciones protegidas verifican el token JWT y devuelven 401 o 403 según el caso.
- Las validaciones de entrada (body, params, query) devuelven 400 si hay errores.
- Los errores inesperados, como fallos en servicios externos (e.g. Firebase), devuelven 500 con un mensaje genérico.

### 🧪 Ejemplo de error 401

```http
POST /api/products/create
Content-Type: application/json

{
  "name": "Gorra",
  "price": 19.99
}
```

## 🔐 Autenticación y seguridad

La API implementa autenticación basada en tokens JWT (JSON Web Tokens) para proteger los endpoints sensibles y garantizar el acceso seguro a los recursos.

### 🧾 Flujo de autenticación

1. El usuario inicia sesión mediante el endpoint `POST /auth/login`, proporcionando email y contraseña.
2. Si las credenciales son válidas, el servidor responde con un token JWT.
3. Este token debe incluirse en el encabezado `Authorization` de cada petición protegida:

```http
Authorization: Bearer <token>
```

## 👨‍💻 Creador del proyecto

Este proyecto fue desarrollado por **Norberto Gatti**, desarrollador backend enfocado en la construcción de APIs escalables, migración a Firebase y documentación profesional.

### 🧠 Perfil técnico

- Conocimientos de JavaScript, Node.js, Express y Firebase.
- Experiencia en arquitectura modular, manejo de errores, seguridad y autenticación con JWT.
- Enfoque en transparencia de workflow, buenas prácticas y documentación clara.
- Apasionado por construir soluciones mantenibles, seguras y accesibles para futuros colaboradores.

### 🌐 Contacto

- GitHub: [github.com/ngatti68](https://github.com/ngatti68)
- LinkedIn: [linkedin.com/in/norberto-gatti-1a42aa58](https://www.linkedin.com/in/norberto-gatti-1a42aa58/)

Este proyecto forma parte de su proceso de evaluación profesional en **Talento Tech**, y representa su compromiso con el aprendizaje continuo, la calidad técnica y la comunicación efectiva.

---

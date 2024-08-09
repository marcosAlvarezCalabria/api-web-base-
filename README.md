# Proyecto API y Web

Este repositorio contiene una API RESTful y una aplicación web que interactúan entre sí. La API gestiona operaciones CRUD completas para usuarios, incluyendo el registro y el inicio de sesión. La aplicación web está construida con React y utiliza React Hook Form para gestionar formularios y la validación de datos.

## Estructura del Repositorio

El repositorio está dividido en dos partes principales:

1. **API**: Implementa la lógica de negocio para la gestión de usuarios.
2. **Web**: Aplicación frontend construida con React, que incluye un formulario para registrar y gestionar usuarios.

## Requisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MongoDB](https://www.mongodb.com/) (para la base de datos)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) (para la gestión de paquetes)

## Instalación y Configuración

### 1. Configuración de la API

1. Navega al directorio de la API:
   ```bash
   cd api
Instala las dependencias:

bash
Copiar código
npm install
Configura las variables de entorno:
Crea un archivo .env en el directorio de la API con las siguientes variables:

env
Copiar código
MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
PORT=5000
Inicia el servidor de la API:

bash
Copiar código
npm start
2. Configuración de la Aplicación Web
Navega al directorio de la aplicación web:

bash
Copiar código
cd web
Instala las dependencias:

bash
Copiar código
npm install
Configura las variables de entorno:
Crea un archivo .env en el directorio de la aplicación web con la siguiente variable:

env
Copiar código
REACT_APP_API_URL=http://localhost:5000
Inicia la aplicación web:

bash
Copiar código
npm start
Rutas de la API
Aquí están las rutas disponibles en la API:

1. Registro de Usuario
Método: POST
Ruta: /user
Descripción: Registra un nuevo usuario.
2. Obtener Perfil de Usuario
Método: GET
Ruta: /profile
Descripción: Obtiene el perfil del usuario autenticado.
Middleware: authMiddleware.checkAuth (Requiere autenticación)
3. Inicio de Sesión
Método: POST
Ruta: /login
Descripción: Inicia sesión de un usuario.
4. Actualizar Perfil de Usuario
Método: PATCH
Ruta: /profile
Descripción: Actualiza el perfil del usuario autenticado.
**
   

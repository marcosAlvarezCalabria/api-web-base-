# Proyecto API y Web

Este proyecto combina una API con un sistema completo de CRUD para usuarios y una aplicación web construida en React. La API gestiona el registro, inicio de sesión y administración de usuarios, mientras que la web permite interactuar con la API a través de un formulario que utiliza React Hook Form para la validación.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

Este proyecto incluye dos componentes principales:

1. **API**: Una API RESTful que ofrece operaciones CRUD completas para la gestión de usuarios, incluyendo registro, inicio de sesión, actualización y eliminación. La API está conectada a una base de datos MongoDB.
2. **Web**: Una aplicación web construida con React que incluye un formulario para registrar nuevos usuarios. Utiliza `React Hook Form` para manejar la validación de los datos del formulario y se comunica con la API para crear usuarios en la base de datos.

## Características

- **API**:
  - Registro de usuarios.
  - Inicio de sesión de usuarios.
  - Actualización y eliminación de usuarios.
  - Conexión a una base de datos MongoDB.

- **Web**:
  - Formulario de registro de usuarios con validación.
  - Manejo de errores de entrada de datos.
  - Interacción con la API para crear usuarios.

## Instalación

### Requisitos Previos

- Node.js y npm instalados.
- MongoDB en funcionamiento.

### Instalación de la API

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repo.git
    ```
2. Navegar al directorio de la API:
    ```bash
    cd tu-repo/api
    ```
3. Instalar dependencias:
    ```bash
    npm install
    ```
4. Configurar las variables de entorno. Crea un archivo `.env` en el directorio raíz de la API y añade las variables necesarias, como la URI de MongoDB.

5. Iniciar el servidor de la API:
    ```bash
    npm start
    ```

### Instalación de la Web

1. Navegar al directorio de la web:
    ```bash
    cd ../web
    ```
2. Instalar dependencias:
    ```bash
    npm install
    ```
3. Iniciar el servidor de desarrollo:
    ```bash
    npm start
    ```

## Uso

### API

- **Registro de Usuario**:
  - `POST /api/users/register`
  - Cuerpo de la solicitud: `{ "username": "user", "password": "pass" }`

- **Inicio de Sesión**:
  - `POST /api/users/login`
  - Cuerpo de la solicitud: `{ "username": "user", "password": "pass" }`

### Web

1. Abre tu navegador y ve a `http://localhost:3000`.
2. Usa el formulario de registro para crear nuevos usuarios. Los errores en los datos se mostrarán en el formulario si los datos ingresados son incorrectos.

## Estructura del Proyecto


   

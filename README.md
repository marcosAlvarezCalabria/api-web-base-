


   
# Proyecto API y Web

Este proyecto combina una API con un sistema completo de CRUD para usuarios y una aplicación web construida en React. La API gestiona el registro, inicio de sesión y administración de usuarios, mientras que la web permite interactuar con la API a través de un formulario que utiliza React Hook Form para la validación.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas de la API](#rutas-de-la-api)
- [Componente de Registro](#componente-de-registro)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

Este proyecto incluye dos componentes principales:

1. **API**: Una API RESTful para la gestión de usuarios, que incluye registro, inicio de sesión, actualización y eliminación. Utiliza una base de datos MongoDB y tiene autenticación protegida para ciertas rutas.
2. **Web**: Una aplicación web construida con React que incluye un formulario de registro de usuarios. Utiliza `React Hook Form` para la validación de datos y se comunica con la API para crear usuarios.

## Características

- **API**:
  - Registro de usuarios.
  - Inicio de sesión de usuarios.
  - Actualización y eliminación de usuarios.
  - Protección de rutas mediante autenticación.
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

La API proporciona las siguientes rutas:

- **Registro de Usuario**:
  - `POST /api/user`
  - Cuerpo de la solicitud: `{ "email": "user@example.com", "password": "pass1234" }`

- **Inicio de Sesión**:
  - `POST /api/login`
  - Cuerpo de la solicitud: `{ "email": "user@example.com", "password": "pass1234" }`

- **Obtener Perfil**:
  - `GET /api/profile`
  - Requiere autenticación.

- **Actualizar Perfil**:
  - `PATCH /api/profile`
  - Requiere autenticación.
  - Cuerpo de la solicitud: `{ "email": "newemail@example.com", "password": "newpass1234" }`

- **Eliminar Usuario**:
  - `DELETE /api/user`
  - Requiere autenticación.

### Web

1. Abre tu navegador y ve a `http://localhost:3000`.
2. Usa el formulario de registro para crear nuevos usuarios. Los errores en los datos se mostrarán en el formulario si los datos ingresados son incorrectos.


## Rutas de la API

Las rutas de la API están definidas en `api/routes/user.routes.js` y gestionan las siguientes operaciones:

- `POST /api/user`: Crea un nuevo usuario.
- `GET /api/profile`: Obtiene el perfil del usuario autenticado.
- `POST /api/login`: Inicia sesión con las credenciales del usuario.
- `PATCH /api/profile`: Actualiza el perfil del usuario autenticado.
- `DELETE /api/user`: Elimina el usuario autenticado.

La autenticación se maneja mediante middleware en `api/middlewares/auth.middleware.js`, que protege las rutas que requieren autenticación.

## Componente de Registro

El componente de registro en React está definido en `web/src/components/RegisterForm.js` y utiliza `React Hook Form` para gestionar y validar el formulario de registro.



## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Agradecimientos

Gracias a todos los contribuyentes y desarrolladores que han ayudado a hacer posible este proyecto. Si encuentras algún error o tienes sugerencias de mejora, no dudes en abrir un issue en el repositorio.

## Contacto

Para cualquier pregunta o comentario, puedes contactar con el mantenedor del proyecto en [marcosalvarezcalabria@gmail.com](mailto:marcosalvarezcalabria@gmail.com) o a través de (https://github.com/marcosAlvarezCalabria).





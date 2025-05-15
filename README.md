

---

# 🧑‍💻 CRUD\_Usuarios

Este proyecto es una API RESTful creada con **Node.js** y **Express**, que permite gestionar usuarios en memoria. Podés listar, crear, editar y eliminar usuarios mediante distintos endpoints.

---

## 🚀 Cómo ejecutar el proyecto

1. **Clonar el repositorio**


git clone <URL-del-repositorio>
cd Crud_Usuarios


2. **Instalar dependencias (si las hay)**


npm install


3. **Ejecutar el servidor**


node index.js


4. Una vez iniciado, verás en consola:

Servidor escuchando en http://localhost:3000

¡Listo! La API ya está corriendo y podés probar los endpoints.

---

## 🧪 Endpoints disponibles

| Método | Endpoint       | Descripción                     |
| ------ | -------------- | ------------------------------- |
| GET    | /usuarios      | Devuelve el listado de usuarios |
| GET    | /usuarios/\:id | Devuelve un usuario por su ID   |
| POST   | /usuarios      | Crea un nuevo usuario           |
| PUT    | /usuarios/\:id | Actualiza un usuario existente  |
| DELETE | /usuarios/\:id | Elimina un usuario por ID       |

> ⚠️ Tené en cuenta:

* El `GET /usuarios` no mostrará nada si aún no cargaste usuarios con `POST`.
* El `DELETE /usuarios/:id` solo funcionará si existe un usuario con ese ID.
* El `PUT /usuarios/:id` requiere que el usuario exista previamente.

---

## 📥 Requisitos para crear un usuario (`POST /usuarios`)

* `nombre`: obligatorio
* `email`: obligatorio, no debe repetirse
* `edad`: obligatorio

Ejemplo de body (JSON):


{
  "nombre": "Lucía Fernández",
  "email": "lucia@example.com",
  "edad": 28
}



## ✅ Estado

Proyecto funcional y listo para ser probado con herramientas como **Thunder Client** o **Postman**.



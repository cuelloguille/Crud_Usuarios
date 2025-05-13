const express = require('express');
const router = express.Router();

let usuarios = [];
let nextId = 1;

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const { nombre, email, edad } = req.body;

  // Validaciones
  if (!nombre || !email || !edad) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const emailExistente = usuarios.find(u => u.email === email);
  if (emailExistente) {
    return res.status(400).json({ error: 'El email ya está registrado' });
  }

  const nuevoUsuario = {
    id: nextId++,
    nombre,
    email,
    edad
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Actualizar usuario existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, email, edad } = req.body;

  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!nombre || !email || !edad) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const emailExistente = usuarios.find(u => u.email === email && u.id !== id);
  if (emailExistente) {
    return res.status(400).json({ error: 'El email ya está registrado por otro usuario' });
  }

  usuario.nombre = nombre;
  usuario.email = email;
  usuario.edad = edad;

  res.json(usuario);
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ mensaje: 'Usuario eliminado correctamente' });
});

module.exports = router;

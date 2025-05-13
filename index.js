const express = require('express');
const usuariosRoutes = require('./usuarios');

const app = express();
const PORT = 3000;

app.use(express.json()); // Para poder usar req.body
app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

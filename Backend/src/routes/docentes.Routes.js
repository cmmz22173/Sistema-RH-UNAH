const express = require('express');

const routerDocentes = express.Router();

//routerMatematicas.use(express.json());

//obtener todos los empleados
routerDocentes.get('/', (req, res) => {
    res.send('Hola mundo 💻.');
});

module.exports = routerDocentes
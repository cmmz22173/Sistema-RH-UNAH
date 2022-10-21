const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorUsuarios');
const seguridad = require('../auth/seguridad');

const routerUsuarios = express.Router();


//obtener todos los empleados
routerUsuarios.get('/', /*seguridad(),*/ todos);
//Obtener un empleado
routerUsuarios.get('/:id', uno);
//Eliminar un empleado
routerUsuarios.delete('/:id', eliminar);

//Crear un empleado
routerUsuarios.post('/', agregar);


async function todos(req, res, next){
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function uno(req, res, next){
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function agregar(req, res, next){
    try {
        const items = await controlador.agregar(req.body);
        if (req.body.ID_Usuario == 0) {
            mensaje = 'Usuario guardado con exito'
        }else{
            mensaje = 'Usuario actualizado con exito'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err)
    }
};


async function eliminar(req, res, next){
    try {
        const items = await controlador.eliminar(req.params.id);
        respuesta.success(req, res, 'Empleado eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err)
    }
};

routerUsuarios.get('/holis', (req, res) => {
    res.send('💻.');
});

module.exports = routerUsuarios
const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorEmpleados');
const seguridad = require('../auth/seguridad');
const { insertarEmpleado } = require('../model/ModelPAA');

const routerEmpleadosPAA = express.Router();


//obtener todos los empleados
routerEmpleadosPAA.get('/empleados', /*seguridad(),*/ empleados);
//obtener todos los empleados en la PAA
routerEmpleadosPAA.get('/empleadosPAA', empleadosPAA);
//Obtener un empleado
routerEmpleadosPAA.get('/:id', unEmpleado);
//Eliminar un empleado
routerEmpleadosPAA.delete('/:id', eliminar);

//Crear un empleado
routerEmpleadosPAA.post('/Empleado', insertarEmplead);
routerEmpleadosPAA.post('/EmpleadoPAA', insertarEmpleadoPAA);
routerEmpleadosPAA.post('/DescripcionPAA', insertarDescripcionPAA);


async function empleados(req, res, next){
    try {
        const items = await controlador.empleados();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function empleadosPAA(req, res, next){
    try {
        const items = await controlador.empleadosPAA();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function unEmpleado(req, res, next){
    try {
        const items = await controlador.unEmpleado(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function insertarEmplead(req, res, next){
    try {
        const items = await controlador.insertarEmpleado(req.body);
        if (req.body.id_empleado == 0) {
            mensaje = 'Empleado guardado con exito'
        }else{
            mensaje = 'Empleado actualizado con exito'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err)
    }
};

async function insertarEmpleadoPAA(req, res, next){
    try {
        const items = await controlador.insertarEmpleadoPAA(req.body);
        if (req.body.id_paa == 0) {
            mensaje = 'Empleado guardado con exito'
        }else{
            mensaje = 'Empleado actualizado con exito'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err)
    }
};

async function insertarDescripcionPAA(req, res, next){
    try {
        const items = await controlador.insertarDescripcionPAA(req.body);
        if (req.body.id_descripcion == 0) {
            mensaje = 'Descripcion guardado con exito'
        }else{
            mensaje = 'Descripcion actualizado con exito'
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



module.exports = routerEmpleadosPAA
const dataBase = require('../model/ModelPAA');
const respuesta = require('../helpers/respuestas');

const TABLA = 'EMPLEADOS'

function empleados() {
    return dataBase.empleados();
}

function empleadosPAA() {
    return dataBase.empleadosPAA(TABLA);
}

function unEmpleado(id) {
    return dataBase.unEmpleado(TABLA, id);
}

async function insertarEmpleado(body) {
    return dataBase.insertarEmpleado(TABLA, body);
}

async function insertarEmpleadoPAA(body) {
    return dataBase.insertarEmpleadoPAA(TABLA, body);
}

async function insertarDescripcionPAA(body) {
    return dataBase.insertarDescripcionPAA(TABLA, body);
}


function eliminar(id) {
    return dataBase.eliminar(TABLA, id);
}

module.exports ={
    eliminar,
    empleados,
    empleadosPAA,
    insertarEmpleadoPAA,
    insertarEmpleado,
    insertarDescripcionPAA,
    unEmpleado
}
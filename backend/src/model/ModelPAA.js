const {conexion} = require('../DB/mysql.js');
const respuesta = require('../helpers/respuestas');

function empleadosPAA() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM PAA  INNER JOIN EMPLEADOS 
        ON PAA.id_empleado = EMPLEADOS.id_empleado`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function empleados() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM EMPLEADOS`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function unEmpleado(TABLA,id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${TABLA} WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarEmpleado(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO ${TABLA} SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarEmpleadoPAA(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO PAA SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarDescripcionPAA(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO DESCRIPCION SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function eliminarEmpleado(TABLA, id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`DELETE FROM ${TABLA} WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function query(TABLA, consulta) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT *  FROM ${TABLA} WHERE ?`,consulta, (error, result) =>{
            return error ? reject(error) : resolve(result[0]);
        });
    });
}

module.exports ={
    empleadosPAA,
    empleados,
    unEmpleado,
    insertarEmpleado,
    insertarEmpleadoPAA,
    insertarDescripcionPAA,
    eliminarEmpleado,
    query
}
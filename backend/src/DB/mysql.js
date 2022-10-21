const mysql = require('mysql')
const config = require('../config');
const { error } = require('../helpers/respuestas');

const dbConfig = {
    server: config.mysql.server,
    database:config.mysql.dababase,
    user: config.mysql.user,
    password: config.mysql.password
}
let conexion;

function conexionMysql() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db error]', err);
            setTimeout(conexionMysql, 200);
        }else{
            console.log('Base de Datos conectada <3');
            
        }
    });

    conexion.on('error', err =>{
        console.log('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conexionMysql();
        }else{
            throw err;
        }
    });
}

conexionMysql();

function todos(TABLA) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${TABLA}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}
function uno(TABLA,id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${TABLA} WHERE ID_Usuario=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function agregar(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO ${TABLA} SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}


function eliminar(TABLA, id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`DELETE FROM ${TABLA} WHERE ID_Usuario=${id}`, (error, result) =>{
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
    todos,
    uno,
    agregar,
    eliminar,
    query,
    conexion
}
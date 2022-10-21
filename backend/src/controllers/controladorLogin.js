const dataBase = require('../DB/mysql.js');

const TABLA = 'usuarios'


function agregar(data) {
    const authData ={
        id: data.id,
    }
    if (data.usuario) {
        authData.usuario = data.usuario
    }
    if (data.password) {
        authData.password = data.Password
    }

    return dataBase.agregar(TABLA, authData);
}


module.exports ={
    agregar,
}
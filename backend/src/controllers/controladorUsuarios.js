const dataBase = require('../DB/mysql.js');
const bcrypt = require('bcrypt');
const auth = require('../auth/token');
const respuesta = require('../helpers/respuestas');

const TABLA = 'usuarios'

function todos() {
    return dataBase.todos(TABLA);
}

function uno(id) {
    return dataBase.uno(TABLA, id);
}

async function agregar(body) {
    body.Password = await bcrypt.hash(body.Password.toString(),5) 
    return dataBase.agregar(TABLA, body);
}


function eliminar(id) {
    return dataBase.eliminar(TABLA, id);
}

async function login(email, password) {
    const data = await dataBase.query(TABLA, {Email:email});
    if (data) {
        return bcrypt.compare(password, data.Password)
        .then(resultado =>{
            if (resultado === true) {
                //Generar un token
                var info={
                    user:data,
                    token: auth.asignarToken({...data})
                }
                return info;
            }
        })
    }
}
module.exports ={
    todos,
    uno,
    agregar,
    eliminar,
    login
}
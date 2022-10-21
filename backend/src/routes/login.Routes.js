const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorUsuarios');

const routerLogin = express.Router();


routerLogin.post('/', login);

async function login(req, res, next) {
    
    try {
        const token = await controlador.login(req.body.Email, req.body.Password);
        var data 
        if (token) {
            data = {
                    datos:token,
                    validacion:'Usuario y contraseña verificada',
                    
            }
        }else{
            data= {validacion:'Usuario y contraseña invalidos'}
        }
        respuesta.success(req, res, data, 200);
    } catch (err) {
        next(err);
    }
}

module.exports = routerLogin
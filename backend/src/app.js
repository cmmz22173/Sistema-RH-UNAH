const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const error = require('./helpers/errors')
const app = express();

//configuracion
app.set('port', config.app.port);

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// Routers
const routerUsuarios = require('./routes/usuarios.Routes');
app.use('/RR-HH/Usuarios', routerUsuarios);

const routerLogin = require('./routes/login.Routes');
app.use('/RR-HH/Login', routerLogin);

const routerEmpleadosPAA = require('./routes/empleadosPAA.Routes');
app.use('/RR-HH/PAA', routerEmpleadosPAA);


app.use(error);

module.exports = app;
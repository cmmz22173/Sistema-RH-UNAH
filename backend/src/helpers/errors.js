const respuesta = require('./respuestas');

function errors(err, req, res, next) {
    console.log('[error', err);
    const mesagge = err.message || 'Error Interno';
    const status = err.statusCode || 500;
    respuesta.error(err, res, mesagge, status);
}

module.exports = errors;
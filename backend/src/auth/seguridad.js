const auth = require('./token')

module.exports= function chequearAuth() {
    function middleware(req, res, next) {
        auth.chequeaToken.confirmarToken(req);
        next();
    }
    return middleware;
}
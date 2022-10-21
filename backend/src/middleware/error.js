function error(message) {
    let e = new Error(message);
    if (code) {
        e.statusCode = code;
    }
    return e;
}

module.exports = error;
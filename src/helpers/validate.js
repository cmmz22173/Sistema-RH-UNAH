
function  validar(){
    (() => {
'use strict'
const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        console.log("Invalidos")
    }else{
        console.log("Validados")
        return true
    }
    form.classList.add('was-validated')
    }, false)
    return false
})
})()
    }

    module.exports = {
        validar:validar
    }; 
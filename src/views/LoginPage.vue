<template>
    <div id="div-principal" class="row container-fluid" >
        <div id="div-contenido" class="col-7">
            <img class="img-cuadritos" style="top: 15%; right: 40%; width: 50px;" src="@/assets/img/Cuadritos-1.png" alt="Error">
            <img class="img-cuadritos" style="top: 56%; right: 70%; width: 130px;" src="@/assets/img/Cuadritos-1.png" alt="Error">
            <img class="img-cuadritos" style="bottom: 0%; right: 10%; width: 60px;" src="@/assets/img/Cuadritos-2.png" alt="Error">
            <img class="img-cuadritos" style="top: 5%; right: 55%; width: 70px;" src="@/assets/img/Cuadritos-3.png" alt="Error">
            <img class="img-cuadritos" style="top: 58%; right: 10%; width: 70px;" src="@/assets/img/Cuadritos-3.png" alt="Error">
            <img class="img-cuadritos" style="bottom: 2%; left: 5%; width: 30px;" src="@/assets/img/Cuadritos-3.png" alt="Error">
            <img class="img-cuadritos" style="top: 40%; right: 35%; width: 130px;" src="@/assets/img/Cuadritos-4.png" alt="Error">
            <img id="img-lucem" src="@/assets/img/LUCEM-ASPICIO.png" alt="Error">
            <img id="img-logo-unah" src="@/assets/img/log0-unah.png" alt="Error">
            <div id="marco-yellow">
                <img id="img-admin" src="@/assets/img/img-admin.jpg" alt="Error">
            </div>
            <p id="texto-contenido">
                Somos la unidad especialista en generar valor agregado, consultores, promotores del 
                cambio institucional; fomentando una nueva cultura organizacional con sentido de 
                pertenencia, garantizando excelencia en la calidad de servicio, ambiente laboral 
                saludable, incorporando, manteniendo y reteniendo talento humano que cumpla las 
                expectativas institucionales y personales.
            </p>
        </div>
        <div id="div-login" class="col-5">
            <img id="img-SEDP" src="@/assets/img/SDPE.png" alt="Error">
            <form class="row g-3 needs-validation" novalidate>
                <div class="form-floating mb-3" style="margin-top: 20px;">
                    <input type="email" class="form-control" v-model="Email" id="txt-email" placeholder="name@example.com" required>
                    <label for="floatingInput">Email</label>
                    <div class="invalid-feedback">
                            Por favor ingresar correo electronico valido.
                </div>
                </div>
                
                <div class="form-floating" style="margin-bottom: 10px;">
                    <input type="password" class="form-control" v-model="Password" id="txt-password" placeholder="Password" required>
                    <label for="floatingPassword">Contraseña</label>
                    <div class="invalid-feedback">
                            Por favor introducir  contraseña.
                </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                        Recordarme
                        </label>
                    </div>
                    <a href="" class="text-body">Olvidaste tu contraseña?</a>
                </div>
                <div class="d-grid gap-2">
                <button @click="validar()"  class="btn btn-primary btn-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">Iniciar Sesion</button>
                </div>
            </form>
            <button @click="IniciarSecion()" class="btn btn-primary btn-lg" >asdfsfasdff</button>
        </div>
    </div>
</template>

    <script>
        import axios from 'axios';
        import router from "@/router";
    export default{
        name: 'loginUser',
        data(){
            return{
            Email:'',
            Password:'',
            }
        },
        methods: {
            validar(){
            (() => {
            'use strict'
            const forms = document.querySelectorAll('.needs-validation')
            Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                
            }
            form.classList.add('was-validated')
            
            }, false)
            
            })
            })()
            },
            async IniciarSecion() {
                var user={
                    "Email":this.Email,
                    "Password":this.Password,
                }
                await axios.post('http://localhost:4000/RR-HH/login',user)
                .then(function (response) {
                    console.log(response.data)
                    if (response.data.body.validacion == 'Usuario y contraseña verificada') {
                    if (response.data.body.datos.user.ID_Departamento == 1) {
                        router.push('/administrador')
                    } else {
                        console.log('otros');
                        router.push('/Menu')
                    }

                    
                }else{
                    console.log('Usuario y contraseña invalidos');
                }
                });
            }
        },
        
    }

    </script>

<style>

#div-principal{
    min-height: 100%;
    margin: 0;
    padding: 0;
} 

#div-contenido{
    height: 100vh;
    background-color: #3379d6;
    position: relative;
}

#img-lucem{
    width: 300px;
    position:absolute;
    top: 0;
    right: 0;
    opacity:.3;
}

#img-logo-unah{
    width: 200px;
    position:absolute;
    top: 0;
    left: 0;
}


#marco-yellow{
    width: 390px;
    height: 280px;
    position:absolute;
    background-color: #ffbf00;
    border-radius: 25px;
    top: 23%;
    left: -3%;
}

#img-admin{
    width: 350px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#texto-contenido{
    font-family: 'Calistoga';
    font-size: 15px;
    text-align: justify;
    position:absolute;
    padding: 25px;
    bottom: 0px;
    color: white;
}

#div-login{
    height: 100vh;
    background-color: rgb(255, 255, 255);
    position: relative;
    padding: 60px;
}

#img-SEDP{
    width: 270px;
    margin-bottom: 70px;
}
.img-cuadritos{
    position: absolute;
}
</style>


<template>
    <header>
        <div id="banner">
            <img id="img-cubitos" src="@/assets/img/Cubitos.png" alt="error">
            <p id="titulo-2">LUCEM ASPICIO</p>
            <h1 id="titulo">Departamento de Efectividad <br> del Recurso Humano </h1>
            <img id="img-sol" src="@/assets/img/sol.png" alt="error">
        </div>
    </header>
    <div id =form-ingresar class="container"> 
        <img style="width:90px; position: absolute; top: 10px; left: 10px; z-index:2" src="@/assets/img/Cuadritos-1.png" alt="">
        <img style="width:50px; position: absolute; top: 15px; right: 25px;" src="@/assets/img/Cuadritos-2.png" alt="">
        <img style="width:50px; position: absolute; bottom: 20px; left: 50px;" src="@/assets/img/Cuadritos-3.png" alt="">
        <img style="width:90px; position: absolute; bottom: 0; right: 0; z-index:1" src="@/assets/img/Cuadritos-4.png" alt="">
        <span id="texto-form">Sistema de planilla, monitoreo y PAA. </span>
        <div class="d-grid gap-2" style="margin-top:30px">
            <button class="btn btn-primary btn-lg" style="z-index:10" type="button" @click="ingresarLogin()">Ingresar</button>
        </div>
    </div>
    <img id="logo-unah" src="@/assets/img/log0-unah.png" alt="">
</template>

<script >
    export default{
        name: 'loginUser',
        data(){
            return{
            
            }
        },
        methods: {
            ingresarLogin(){
                this.$router.push('/login')
            }
        },
    }
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');

body{
    background-image: url(../assets/img/Home-UNAH.png);
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

header{
    display: flex;
    height: 100px;
    background-color: #003372;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    position: relative;
}

#banner{
    display: flex;
    align-items: center;
}

#titulo{
    font-family: 'Calistoga';
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#titulo-2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 80px;
    font-weight: bold; 
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#2b50e32a;
}

#img-cubitos{
    width: 240px;
    height: 180px;
    position: absolute;
    top: 1px;
    left: 50px;
}

#img-sol{
    width: 150px;
    height: 100px;
    position: absolute;
    right: 0;
}

#logo-unah{
    position:absolute;
    bottom: 0;
    left: 0;
}

#form-ingresar{
    width: 350px; 
    height: 330px; 
    background-color: rgb(255, 255, 255); 
    border-radius: 30px; 
    box-shadow: 0px 0px 25px 1px rgb(0 0 0);
    position: absolute;
    top: 55%;
    left: 83%;
    transform: translate(-58%, -50%);
    padding-top: 100px;
}

#texto-form{
    font-family: 'Calistoga';
    font-size: 25px;
    font-weight: bold;
    color:#003672;
    z-index: 9;
}
</style>

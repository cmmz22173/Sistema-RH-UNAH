<template>
<SideBar></SideBar>
<div class="card-group d-flex justify-content-center" style="padding-top: 10rem;padding-left: 5rem
  ;padding-right:5rem;background-color: rgb(255, 255, 255);
	height: 100vh;">
<div class="row">
  <div class="col">
    <a href="#" >
      <div class="card cardbtn w-100">
        <img src="@/assets/gestion-empleados.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">Gestionar empleados</label>

        </div>
      </div>
    </a>
  </div>
  <div class="col">
    <a href="#" >
      <div class="card cardbtn w-100">
        <img src="@/assets/asistencia.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">Asistencia</label>

        </div>
      </div>
    </a>
  </div>
  <div class="col">
    <a href="#" >
      <div class="card cardbtn w-100">
        <img src="@/assets/monitoreo.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">Monitoreo</label>

        </div>
      </div>
    </a>
  </div>
  <div class="col">
    <a href="/paa" >
      <div class="card cardbtn w-100">
        <img src="@/assets/paa-logo.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">PAA</label>

        </div>
      </div>
    </a>
  </div>


</div>

</div>


</template>

<script>


import SideBar from "@/components/sidebar/SideBar";

export default {
  components: {
    SideBar

  }
}


</script>

<style>
.cardbtn{
  margin: 0.5rem;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei",serif;
}
.cardbtn:hover{
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transition: 0.5s;
  transform: scale(1.05);
}


</style>
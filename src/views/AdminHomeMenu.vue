<template>
  <SideBarAdmin></SideBarAdmin>

  <div class="card-group d-flex justify-content-center" style="padding-top: 10rem;padding-left: 5rem
  ;padding-right:5rem;background-color: rgb(255, 255, 255);
	height: 100vh;">
  <div class="row">
    <div class="col">
      <a href="/registro-usuario" >
      <div class="card cardbtn w-100">
        <img src="@/assets/registro.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">Registrar usuario</label>

        </div>
      </div>
      </a>
    </div>
    <div class="col">
      <a href="/roles-usuario" >
        <div class="card cardbtn w-100">
          <img src="@/assets/roles.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
          <div class="card-body justify-content-center" style="text-align: center">
            <label style="color: black">Administrar roles</label>

          </div>
        </div>
      </a>
    </div>
    <div class="col">
      <a href="#" >
        <div class="card cardbtn w-100">
          <img src="@/assets/bell.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
          <div class="card-body justify-content-center" style="text-align: center">
            <label style="color: black">Notificaciones</label>

          </div>
        </div>
      </a>
    </div>
    <div class="col">
      <a href="/menu" >
        <div class="card cardbtn w-100">
          <img src="@/assets/homepage.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
          <div class="card-body justify-content-center" style="text-align: center">
            <label style="color: black">Menu Principal</label>

          </div>
        </div>
      </a>
    </div>


  </div>

  </div>


</template>

<script>

//import SampleNavbar from "@/components/navbar/SampleNavbar";
import SideBarAdmin from "@/components/sidebar/SideBarAdmin";
export default {
  components: {
 SideBarAdmin

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

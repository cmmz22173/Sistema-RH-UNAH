<template>
  <SideBar></SideBar>
  <div class = "conteiner">
    <div class = "row">
      <div class = "col-md-8 offset-md-2">
        <br>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Datos del usuario</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Actualizar contraseña</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <br>
          <br>
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div class = "row">
              <br>
              <div class="col-4">
                <img  class="rounded mx-auto d-block" src="data:image/jpeg;base64,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" alt = "">
              </div>
              <div class="col-8">
                <div class="form-group row">
                  <label for="id" class="col-3 fw-bold">ID:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "1">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="nombre" class="form-group col-3 fw-bold" >Nombre:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "Juan">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="segundo_nombre" class="form-group col-3 fw-bold" >Segundo nombre:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "Alberto">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="apellido" class="form-group col-3 fw-bold" >Apellido:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "Lopez">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="segundo_apellido" class="form-group col-3 fw-bold" >Segundo apellido:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "Cruz">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="fechaNacimiento" class="form-group col-4 fw-bold" >Fecha de nacimiento:</label>
                  <div class="col-sm-1">
                    <input type="text" class="from-control text-center " value = "11/11/1989">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label for="direccion" class="form-group col-3 fw-bold" >Direccion:</label>
                  <div class="col-sm-2">
                    <input type="text" class="from-control text-center" value = "Col. El lolo">
                  </div>
                </div>
                <br>
                <div class="form-group row ">
                  <label for="email" class="col-3 fw-bold">Email:</label>
                  <div class="col-sm-2 ">
                    <input type="email" class="from-control text-center" value = "Juan@gmail.com">
                  </div>
                </div>
                <br>

                <div class="form-group row">
                  <label for=" contrasenia  " class="form-group col-3 fw-bold ">Contraseña:</label>
                  <div class="col-sm-2 ">
                    <input type="password" class="from-control" value = "123">
                  </div>
                </div>
                <br>
                <div class="form-group row ">
                  <label for="telefono" class="form-group col-3 fw-bold">Telefono:</label>
                  <div class="col-sm-2 ">
                    <input type="text" class="from-control text-center" value = "98989898">
                  </div>
                </div>
                <br>
                <div class="form-group text-center">
                  <button class="btn btn-info">Actualizar</button>
                </div>


              </div>
            </div>

          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="col-md-8 offset-md-2">
              <h3 class="test text-center fw-bold">Cambia tu contraseña</h3>
              <br>
              <div class="form-group row">
                <label for="contrasenia" class="col-3 fw-bold">Contraseña:</label>
                <div class="col-9">
                  <input type="password" class="form-control">
                </div>

              </div>
              <br>
              <div class="form-group row">
                <label for="ncontrasenia" class="col-3 fw-bold">Nueva contraseña:</label>
                <div class="col-9">
                  <input type="password" class="form-control">
                </div>
              </div>
              <br>
              <div class="form-group text-center d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-info me-md-2">Actualizar</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SideBar from "@/components/sidebar/SideBar";

export default {
  components:{SideBar}

}
</script>

<style scoped>

</style>
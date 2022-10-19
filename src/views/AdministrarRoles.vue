<template>
  <SideBarAdmin></SideBarAdmin>
  <!--LA PARTE DE LAS BARRAS DE ESTADO PUEDE QUE LAS TERMINEMOS QUITANDO AL FINAL-->
  <div class="d-flex m-5 justify-content-center">
    <form class="d-flex needs-validation">
      <select class="form-select w-auto optionBtn" aria-label="Seleccion de busqueda" required>
        <option selected disabled value="">Buscar por</option>
        <option value="1">ID empleado</option>
        <option value="2">Nombre</option>
      </select>

      <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" id="searchBtn" style="width: 30rem" required>
      <button class="btn searchBtn" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
    </form>
  </div>

  <div class=" card-group PerfilCard">
    <div class="card ">
      <div class="card-title">
        <h5 style="margin-top: 1rem">Administradores</h5>
      </div>
      <div class="card-body">
          <img src="@/assets/administradores.png" class="img-fluid" style="width: 50%;display: block;margin:auto">
        <div>
          <div style="text-align: left; margin-top: 0.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            : Permisos totales</div>
          <div class="progress" style="margin-top: 0.5rem">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card ">
      <div class="card-title">
        <h5 style="margin-top: 1rem">Usuario Comun</h5>
      </div>
      <div class="card-body">
        <img src="@/assets/employees.png" class="img-fluid" style="width: 50%;display: block;margin:auto">
        <div>

          <div style="text-align: left; margin-top: 0.5rem">1: Gestion de empleados</div>
          <div class="progress" style="margin-top: 0.5rem;margin-bottom: 0.5rem">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div style="text-align: left">2: Asistencia</div>
          <div class="progress" style="margin-top: 0.5rem;margin-bottom: 0.5rem">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 20%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div style="text-align: left">3: Monitoreo</div>
          <div class="progress" style="margin-top: 0.5rem;margin-bottom: 0.5rem">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <div style="text-align: left">4: PAA</div>
          <div class="progress" style="margin-top: 0.5rem;margin-bottom: 0.5rem">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">
        <h5 style="margin-top: 1rem">Sin asignar</h5>
        <div class="card-body">
          <img src="@/assets/desconocido.png" class="img-fluid" style="width: 50%;display: block;margin:auto">
          <div>
            <div style="text-align: left; margin-top: 0.9rem">Sin permisos</div>
            <div class="progress" style="margin-top: 0.5rem">
              <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--POR LA FALTA DE TIEMPO PARA LA ENTREGA DEL SPRINT 2
  , OCULTO ESTA ETIQUETA PARA QUE POR AHORA LOS CAMBIOS SEAN UNO POR UNO-->

  <div class="d-flex justify-content-left invisible" style="padding-left: 5rem"  >
    <form class="d-flex needs-validation">
      <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
        <option selected disabled value="">Rol</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">Administrador</option>
        <option value="3">Ninguno</option>
      </select>
      <button type="submit" class="btn btn-outline-dark">
        Filtrar
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
    </form>
  </div>



  <div class="d-flex justify-content-center" style="padding-left: 4rem; padding-right: 4rem;margin-top: 2rem">
    <table class="table align-middle mb-0 bg-white ">
      <thead class="paa-table">
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Usuario</th>
        <th scope="col">Permisos</th>

      </tr>
      </thead>
      <tbody>
      <tr>
        <!--SOLO ES UN EJEMPLO -->
        <th scope="row">1</th>
        <td about="AQUI VA EL ID DEL USUARIO">101</td>
        <td about="AQUI VA LA IMAGEN, NOMBRE, Y CORREO">
          <div class="d-flex align-items-center">
            <img
                about="IMAGEN DEL EMPLEADO"
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                alt=""
                style="width: 35px; height: 35px"
                class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">Mark Alfonso Zucaritas Rodriguez</p>
              <p class="text-muted mb-0">Mark@unah.com</p>
            </div>
          </div>
        </td>

        <td about="permisos">
          1,2,3,4
        </td>
      </tr>
      </tbody>
    </table>

  </div>

  <div class="d-flex justify-content-end" style="padding-left: 4rem; padding-right: 4rem;margin-top: 2rem">

    <button type="button" class="btn btn-success btnTablas" data-bs-toggle="modal" data-bs-target="#Guardar">
      Modificar
    </button>

    <!--ESTA ES LA VENTANA EMERGENTE-->
    <div class="modal fade" id="Guardar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Permisos</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-check-inline form-switch ">
              <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" style="padding-left: 0.5rem" for="flexSwitchCheckDefault">1</label>
            </div>
            <div class="form-check-inline form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1">
              <label class="form-check-label" style="padding-left: 0.5rem" for="flexSwitchCheckDefault1">2</label>
            </div>
            <div class="form-check-inline form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2">
              <label class="form-check-label" style="padding-left: 0.5rem" for="flexSwitchCheckDefault2">3</label>
            </div>
            <div class="form-check-inline form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3">
              <label class="form-check-label" style="padding-left: 0.5rem" for="flexSwitchCheckDefault3">4</label>
            </div>

            <div class="form-check-inline form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3">
              <label class="form-check-label" style="padding-left: 0.5rem" for="flexSwitchCheckDefault3"></label>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>

        </div>
      </div>
    </div>

  </div>



</template>

<script>

import SideBarAdmin from "@/components/sidebar/SideBarAdmin";

export default {
  components:{SideBarAdmin}
}
</script>


<style scoped>
.optionBtn{
  margin-right: 1rem;

}
.searchBtn{
  background-color: darkorchid;
  color: white;
}

.searchBtn:hover{
  color: white;
  background-color: darkviolet;
  transition: 0.1s;
  transform: scale(1.02);

}
.paa-table{
  background-color: #e9ecef;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

p{
  padding-left: 2rem;
}

.btnTablas{
  margin-left: 1rem;
  margin-bottom: 3rem;
}
.PerfilCard{

  margin-bottom: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  height: auto;
}

#containerCardPerfil{
  padding: 1rem 3rem 4rem;
}
#statusIndicador{
  background-color: #A8E890;
  border-radius: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #425F57;
}


</style>
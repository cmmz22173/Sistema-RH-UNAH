<template>
<SideBar></SideBar>

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

  <div class="d-flex card PerfilCard">
    <div class="" style="margin: 2rem 3rem 0.5rem">
      <h3 style="float: left">Perfil basico</h3>

      <div style="float: right" id="statusIndicador">Activo</div>
    </div>
    <div class="d-flex" id="containerCardPerfil" about="AQUI VA LA FOTO DEL EMPLEADO">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        alt=""
        style="width: 150px; height: 150px"
        class="rounded-circle"
    />

      <div class="" style="padding-left: 5rem" about="Aqui va la informacion personal">
        <h5 class="d-flex">Nombre</h5>
        <label>Mark Alfonso Zucaritas Rodriguez</label>

        <h5 class="d-flex" style="margin-top: 1rem">ID Empleado</h5>
        <label class="d-flex">44444</label>

        <h5 class="d-flex" style="margin-top: 1rem">Correo institucional</h5>
        <label class="d-flex">Mark@unah.com</label>

        <h5 class="d-flex" style="margin-top: 1rem">Identidad</h5>
        <label class="d-flex">0801-1999-20231</label>

        <h5 class="d-flex" style="margin-top: 1rem">Nacionalidad</h5>
        <label class="d-flex">Honduras</label>

      </div>

      <div class="" style="padding-left: 5rem" about="Aqui va informacion universitaria">
        <h5 class="d-flex">Centro</h5>
        <label class="d-flex">Ciudad Universitaria </label>

        <h5 class="d-flex" style="margin-top: 1rem">Unidad</h5>
        <label class="d-flex">Efectividad de Recursos Humanos</label>

        <h5 class="d-flex" style="margin-top: 1rem">Rol</h5>
        <label class="d-flex">Administrativo</label>

        <h5 class="d-flex" style="margin-top: 1rem">Puesto</h5>
        <label class="d-flex">Especialista en cookies</label>
      </div>


      <div class="" style="padding-left: 5rem" about="Aqui va informacion de los dias de PAA">
        <h5 class="d-flex" >Dias totales</h5>
        <label class="d-flex">10</label>

        <h5 class="d-flex" style="margin-top: 1rem">Disponibles</h5>
        <label class="d-flex">7</label>

        <h5 class="d-flex" style="margin-top: 1rem">Gozados</h5>
        <label class="d-flex">3</label>

      </div>


  </div>


  </div>

  <div class="d-flex justify-content-left" style="padding-left: 5rem">

    <form class="d-flex needs-validation">

    <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
      <option selected disabled value="">Año</option>
      <option value="1">Todos</option>
      <option value="2">2000</option>
      <option value="3">2001</option>
    </select>

    <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
      <option selected disabled value="">Periodo</option>
      <option value="1">Todos</option>
      <option value="2">I PAC</option>
      <option value="3">II PAC</option>
      <option value="4">III PAC</option>
    </select>

    <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
      <option selected disabled value="">Edificio</option>
      <option value="1">Todos</option>
      <option value="2">B1</option>
      <option value="3">B2</option>
      <option value="4">F1</option>
    </select>

    <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
      <option selected disabled value="">Funcion</option>
      <option value="1">Todos</option>
      <option value="2">Apoyo</option>
      <option value="3">Aplicador</option>
      <option value="4">Supervisor</option>
    </select>

    <select class="form-select w-auto optionBtn" aria-label="Default select example" required>
      <option selected disabled value="">Tipo</option>
      <option value="1">Todos</option>
      <option value="2">PAM</option>
      <option value="3">PAA</option>
      <option value="4">PCCNS</option>
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
        <th scope="col">Empleado</th>
       <th scope="col"> Año</th>
        <th scope="col">Periodo</th>
        <th scope="col">Fecha</th>
        <th scope="col">Funcion</th>
        <th scope="col">Tipo</th>
        <th scope="col">Edificio</th>
        <th scope="col">Aula</th>
        <th scope="col">Horas</th>
        <th scope="col">Detalles</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>101</td>
        <td>
          <div class="d-flex align-items-center">
            <img
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
        <td>2020</td>
        <td>I PAC</td>
        <td>12/02/2020</td>
        <td>Supervisor</td>
        <td>PAA</td>
        <td>B2</td>
        <td>201</td>
        <td>3</td>
        <td><button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#infoEmpleado">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="infoEmpleado" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Info</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Info por decidir
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

  <div class="d-flex justify-content-end" style="padding-left: 4rem; padding-right: 4rem;margin-top: 2rem">
    <button type="button" class="btn btn-secondary btnTablas" id="" data-bs-toggle="modal" data-bs-target="">
      Reportes
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16" style="margin-left: 0.3rem">
        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
      </svg>
    </button>

    <button type="button" class="btn btn-success btnTablas" data-bs-toggle="modal" data-bs-target="#agregarParticipantes">
      Agregar

      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" style="margin-left: 0.3rem">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
      </svg>
    </button>
    <!-- Modal -->
    <div class="modal fade modal-xl" id="agregarParticipantes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Formulario de participacion PAA</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar</button>
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
<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://static.vecteezy.com/system/resources/previews/008/627/889/non_2x/human-resources-concept-idea-of-recruitment-and-job-management-teamwork-management-hr-manager-occupation-flat-illustration-vector.jpg"
               class="img-fluid" alt="imagen muestra login">

        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

          <img id="Img-login" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid">
          <form>


            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                     placeholder="ejemplo@unah.edu.hn" />

            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input type="password" id="form3Example4" class="form-control form-control-lg"
                     placeholder="Ingrese su contraseña" />

            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Recordarme
                </label>
              </div>
              <a href="" class="text-body">Olvidaste tu contraseña?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button onclick="location.href='/administrador'" type="button" class="btn btn-primary btn-lg"
                      style="padding-left: 2.5rem; padding-right: 2.5rem;">Iniciar Sesion solo porque si</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2022. All rights reserved.
      </div>
      <!-- Copyright -->



      <!-- Right -->
    </div>
  </section>


</template>

<script>


</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;

  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

#Img-login{
  width:40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}

</style>

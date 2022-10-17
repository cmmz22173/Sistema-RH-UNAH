<template>
  <SideBarAdmin></SideBarAdmin>
	<div id="div-principal">
		<div class="container">
			<div id="formulario-newUser" >
				<h1>Nuevo Usuario</h1>
				<form class="needs-validation" novalidate>
					<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-3">
									<label for="txt-primerNombre" class="label" >Primer Nombre</label>
									<input type="text" class="form-control" v-model="primerNombre" id="txt-primerNombre" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-3">
									<label for="txt-segundoNombre" class="label">Segundo Nombre</label>
									<input type="text" class="form-control" v-model="segundoNombre" id="txt-segundoNombre" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-email" class="label" >Correo Electronico</label>
									<input type="email" class="form-control" v-model="email" id="txt-email" required>
									<div class="invalid-feedback">
										Colocar correo valido.
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-3">
									<label for="txt-primerApellido" class="label">Primer Apellido</label>
									<input type="text" class="form-control" v-model="primerApellido" id="txt-primerApellido" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-3">
									<label for="txt-segundoApellido" class="label">Segundo Apellido</label>
									<input type="text" class="form-control" v-model="segundoApellido" id="txt-segundoNombre" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-password" class="label">Contraseña</label>
									<input type="text" class="form-control" v-model="password" id="txt-password" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-fechaNacimiento" class="label">Fecha de nacimiento</label>
									<input type="date" class="form-control" v-model="fecha" id="txt-fechaNacimiento" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-departamento"  class="label">Departamento</label>
									<select class="form-select" v-model="departamento" id="txt-departamento" required>
										<option selected disabled value="">Seleccionar</option>
										<option value="1">Administrador</option>
										<option value="2">Planilla</option>
										<option value="3">Monitoreo</option>
										<option value="4">PAA</option>
									</select>
									<div class="invalid-feedback">
										Please select a valid state.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-telefono"  class="label">Teléfono</label>
									<input type="tel" class="form-control" v-model="telefono" id="txt-telefono" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
								<div class="col-md-6">
									<label for="txt-direccion" class="label">Dirección</label>
									<input type="text" class="form-control" v-model="direccion" id="txt-direccion" required>
									<div class="invalid-feedback">
										Llenar campo.
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<div class="col-12">
									<img id="imgNew" src="../assets/newUser.png" class="img-thumbnail" alt="Error">
									<div class="d-flex justify-content-evenly">
										<input type="file" class="form-control"  id="imgNew">
										<div class="d-grid gap-2 d-md-flex justify-content-md-end">
										</div>
									</div>
									<button class="btn btn-primary" style="margin-top:40px" type="submit" @click="validar()">Guardar Usuario</button>
								</div>
							</div>
							<input type="button" class="btn btn-primary"  @click="NuevoUsuario()"  value="Agregar" style="margin-top: 1rem">
						</div>
	
					</div>
					
				</div>
			</form>
			</div>
		</div>
	</div>

</template>

	<script>

		import axios from 'axios';
    import SideBarAdmin from "@/components/sidebar/SideBarAdmin";
	export default{
		components: {
      SideBarAdmin
		},
		name: 'registroUsuario',
		data(){
			return{
			primerNombre:'',
			segundoNombre:'',
			primerApellido:'',
			segundoApellido:'',
			password:'',
			direccion:'',
			email:'',
			fecha:'',
			departamento:'',
			telefono:''
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
				console.log("Invalidos")
			}else{
				console.log("Validados")
				
			}
			form.classList.add('was-validated')
			}, false)
		})
		})()
		},
		async NuevoUsuario() {
                var userNew={
					"ID_Usuario":"0",
					"ID_Departamento":this.departamento,
					"Nombre1":this.primerNombre,
					"Nombre2":this.segundoNombre,
					"Apellido1":this.primerApellido,
					"Apellido2":this.segundoApellido,
					"Fecha_Nacimiento":this.fecha,
					"Direccion":this.direccion,
					"Imagen":"fviszvipdgofvudpovjsdagusidfagucsiocgsaiogaco",
					"Email":this.email,
					"Password":this.password,
					"Telefono":this.telefono
				}
                await axios.post('http://localhost:4000/RR-HH/usuarios',userNew)
                .then(function (response) {
                    console.log(response)
					alert('Usuario guardado')
                });
            }
		},

	}
	</script>

	<style scoped>
#div-principal{
	padding-top: 15px;
	background-color: rgb(255, 255, 255);
	width: 100vw;
	height: 100vh;
}
#formulario-newUser{
	padding: 20px 50px 50px 50px;
	border-radius: 25px;
	border-style: outset;
	background-color: white;
}
.label{
	margin-top: 30px;
	color: rgb(130, 127, 127);
	text-decoration: solid;
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 18px;
}
#img-newUser{
	width: 200px;
	height: 200px;
}
	</style>
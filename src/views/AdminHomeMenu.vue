<template>
  <CSidebar position="fixed">

    <CSidebarBrand>Sidebar Brand</CSidebarBrand>
    <CSidebarNav>
      <li class="nav-title">Nav Title</li>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
        Nav item
      </CNavItem>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
        With badge
        <CBadge color="primary ms-auto">NEW</CBadge>
      </CNavItem>
      <CNavGroup>
        <template #togglerContent>
          <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
        </template>
        <CNavItem href="#">
          <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
        </CNavItem>
        <CNavItem href="#">
          <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
        </CNavItem>
      </CNavGroup>
    </CSidebarNav>
    <CSidebarToggler/>
  </CSidebar>
  <div class="card-group d-flex justify-content-center" style="padding-top: 10rem;padding-left: 5rem
  ;padding-right:5rem">
  <div class="row">
    <div class="col">
      <a href="/registro-usuario" >
      <div class="card w-100">
        <img src="@/assets/registro.png" class="img-fluid" style="width: 75%;display: block;margin:auto;
        padding-top: 1rem">
        <div class="card-body justify-content-center" style="text-align: center">
          <label style="color: black">Registrar usuario</label>

        </div>
      </div>
      </a>
    </div>
    <div class="col">
      <a href="#" >
        <div class="card w-100">
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
        <div class="card w-100">
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
        <div class="card w-100">
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
import {CSidebar, CSidebarBrand, CNavItem, CBadge, CSidebarToggler, CNavGroup} from '@coreui/vue'
import { CSidebarNav } from '@coreui/vue'

export default {
  components: {
    CSidebar,CSidebarNav,CSidebarBrand,CNavItem,CBadge,CSidebarToggler,CNavGroup

  }
}


</script>

<style>
.card{
  margin: 0.5rem;
 justify-content: center;
  box-sizing: border-box;
 font-family: "Microsoft JhengHei",serif;
}
.card:hover{
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transition: 0.5s;
  transform: scale(1.05);
}


</style>

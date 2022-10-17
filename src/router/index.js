import { createRouter, createWebHistory } from 'vue-router'


// import App from "@/App";
import MenuPrincipal from "@/views/MenuPrincipal";
import RegistroUsuario from "@/views/RegistroUsuario";
import Login from "@/views/LoginPage.vue";
import PerfilUsuario from "@/views/PerfilUsuario";
import PAA from "@/views/PAA";

const routes = [
    {
        path: '/',
        name: 'Home',
        component:()=> import('../views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component:Login
    },
    {
        path: '/administrador',
        name: 'AdminMenu',
        component:()=> import('../views/AdminHomeMenu')
    },
    {
        path: '/menu',
        name: 'Menu',
        component: MenuPrincipal
    },
    {
        path: '/registro-usuario',
        name: 'Registro-usuario',
        component: RegistroUsuario,
        props: true
    },
    {
      path:'/perfil',
      name:'Perfil-usuario',
      component: PerfilUsuario
    },
    {
        path:'/paa',
        name:'Modulo-PAA',
        component: PAA
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
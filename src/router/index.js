import { createRouter, createWebHistory } from 'vue-router'


import App from "@/App";
import MenuPrincipal from "@/views/MenuPrincipal";
import RegistroUsuario from "@/views/RegistroUsuario";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
    {
        path: '/login',
        name: 'login',
        component:()=> import('../components/LoginPage')
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
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
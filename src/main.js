import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "@/router";
import '@fortawesome/fontawesome-free/js/all'
import axios from "axios";
import VueAxios from 'vue-axios';

createApp(App).use(router, axios, VueAxios).mount('#app')

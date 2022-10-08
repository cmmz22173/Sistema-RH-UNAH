import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@coreui/vue"
import '@coreui/coreui/dist/css/coreui.min.css'
import router from "@/router";
import '@fortawesome/fontawesome-free/js/all'
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa o router que criámos

import './assets/main.css' // O seu tailwind

const app = createApp(App)

app.use(router) // ESTA LINHA É CRUCIAL! Liga o sistema de links

app.mount('#app')

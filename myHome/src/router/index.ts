import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' 
import ProjetosView from '../views/ProjetosView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 2. Adicione este bloco para a página Sobre Mim
    {
      path: '/sobre',
      name: 'sobre',
      component: AboutView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView
    }
  ]
})

export default router

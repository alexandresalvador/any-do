import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Conta from '../views/Conta.vue'
import Logado from '../views/Logado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

  },
  {
    path: "/conta",
    name: "conta",
    component: Conta
  },
  {
    path: "/logado",
    name: "logado",
    component: Logado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

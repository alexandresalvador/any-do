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
    path: "/conta",
    name: "conta",
    component: Conta
  },
  {
    path: "/logado",
    name: "logado",
    component: Logado
  },
  {
    path: "/tarefa/:id",
    name: "InfoTarefa",
    //component: InfoTarefa,
  },
  {
    path: '/about',
    name: 'about',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

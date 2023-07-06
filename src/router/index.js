import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/artisticos',
    name: 'artisticos',
    component: () => import('../views/Acontecimientos/ArtisticosView.vue')
  },
  {
    path: '/deportivos',
    name: 'deportivos',
    component: () => import ('../views/Acontecimientos/DeportivosView.vue')
  },
  {
    path: '/mas',
    name: 'mas',
    component: () => import ('../views//Acontecimientos/MasView.vue')
  },
  {
    path: '/arquitectura',
    name: 'arquitectura',
    component: () => import ('../views/Folklore/ArquitecturaView.vue')
  },
  {
    path: '/artesanias',
    name: 'artesanias',
    component: () => import ('../views/Folklore/ArtesaniasView.vue')
  },
  {
    path: '/comida',
    name: 'comida',
    component: () => import ('../views/Folklore/ComidaView.vue')
  },
  {
    path: '/ferias',
    name: 'ferias',
    component: () => import ('../views/Folklore/FeriasView.vue')
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: () => import ('../views/Folklore/GruposView.vue')
  },
  {
    path: '/manifestaciones',
    name: 'manifestaciones',
    component: () => import ('../views/Folklore/ManifestacionesView.vue')
  },
  {
    path: '/musica',
    name: 'musica',
    component: () => import ('../views/Folklore/MusicaView.vue')
  },
  {
    path: '/centros',
    name: 'centros',
    component: () => import ('../views/Realizaciones/CentrosView.vue')
  },
  {
    path: '/agropecuario',
    name: 'agropecuario',
    component: () => import ('../views/Realizaciones/AgropecuariasView.vue')
  },
  {
    path: '/mineria',
    name: 'mineria',
    component: () => import ('../views/Realizaciones/MineriaView.vue')
  },
  {
    path: '/industria',
    name: 'industria',
    component: () => import ('../views/Realizaciones/IndustriaView.vue')
  },
  {
    path: '/artetec',
    name: 'artetec',
    component: () => import ('../views/Realizaciones/ArtetecView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

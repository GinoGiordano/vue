import Vue from 'vue'
import VueRouter from 'vue-router'
import Coffees from '../views/Coffees.vue'
import Publications from '../views/Publication.vue'
import Home from '../views/Home.vue'
import Coffee from '../views/CoffeeView.vue'
import Publication from '../views/PublicationView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/Coffee',
    name: 'coffe',
    component: Coffees

  },
  {
    path: '/Publication',
    name: 'publication',
    component: Publications

  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Coffee/:id',
    name: 'Coffee',
    component: Coffee
  },
  {
    path: '/Publication/:id',
    name: 'Publication',
    component: Publication
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Login from '../views/Login'
import Demande from '../views/Demande'
import PortalVue from 'portal-vue'
import Vue from  'vue'

import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/demande',
    name: 'Demande',
    component: Demande
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Headbar from '../components/HeadBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      headbar: Headbar
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

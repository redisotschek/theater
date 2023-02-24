import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Event from '../views/Event.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

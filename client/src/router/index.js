/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import About from '../views/About.vue'
import Home from '../pages/Home.vue'
import Race from '../pages/Race.vue'
import Bikers from '../pages/Bikers.vue'
import Test from '../pages/Test.vue'

Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/home',
    name: 'Home',
    // component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
    component: Home
  },
  {
    path: '/biker',
    name: 'Bikers',
    // component: () => import(/* webpackChunkName: "about" */ '../pages/Bikers.vue')
    component: Bikers
  },
  {
    path: '/race',
    name: 'Race',
    // component: () => import(/* webpackChunkName: "about" */ '../pages/Race.vue')
    component: Race
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

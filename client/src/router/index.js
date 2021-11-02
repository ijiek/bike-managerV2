import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  {
    path: '/biker',
    name: 'Bikers',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Bikers.vue')
  },
  {
    path: '/race',
    name: 'Race',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Race.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../pages/test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

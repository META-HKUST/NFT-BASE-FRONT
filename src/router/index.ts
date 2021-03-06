import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue')
    }
  ]
})

export default router

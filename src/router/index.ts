import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
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
            path: '/register',
            name: 'Register',
            component: () => import('../views/CreateAccount.vue')
        },
        {
            path: '/resetpassword',
            name: 'ResetPassword',
            component: () => import('../views/ResetPassword.vue')
        },
        {
            path: '/myaccount',
            name: 'MyAccount',
            component: () => import('../views/MyAccount.vue')
        },
        {
            path: '/explore',
            name: 'Explore',
            component: () => import('../views/Explore.vue')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../views/Create.vue')
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import('../views/Detail.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: {
                path: '/'
            }
        }
    ]
})

export default router

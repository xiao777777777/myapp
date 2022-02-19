import Vue from 'vue'
import VueRouter from 'vue-router'
import asyncRouter from "./asyncRouter"



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
      },
    ...asyncRouter,
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login')
    }, {
        path: '*',
        name: '404',
        component: () =>
            import ('../views/404')
    },
 
]

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem("token");
    if (to.fullPath === "/login") {
        next()
    } else {
        if (token) {
            next()
        } else {
            next("/login")
        }
    }

})

export default router
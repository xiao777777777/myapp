import Vue from 'vue'
import VueRouter from 'vue-router'
import asyncRoutes from './asyncRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  ...asyncRoutes,
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login')
  },
]

//避免重复点击时的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
 let token =sessionStorage.getItem("token");
 
  if(to.fullPath=="/login"){
    next()
  }else{
    if(token){
      next()
    }else{
          next("/login")
    }
  }
})

export default router

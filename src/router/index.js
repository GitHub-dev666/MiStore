import Vue from 'vue'
import VueRouter from 'vue-router'

// Home及其附属页面引入
import Home from './../pages/Home.vue'
import HomeContent from './../pages/HomeContent.vue'

// 登录页面引入
import Login from './../pages/login.vue'

// 产品详情页引入
import Detail from './../pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home/homeContent'
  },
  // 主页路由
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'homeContent',
        name: 'homeContent',
        component: HomeContent
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 产品详情页
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

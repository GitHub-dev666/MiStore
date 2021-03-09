import Vue from 'vue'
import VueRouter from 'vue-router'

// Home及其附属页面引入
import Home from './../pages/Home.vue'
import HomeDetail from './../pages/HomeDetail.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home'
  },
  // 主页路由
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: HomeDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

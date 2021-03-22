import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入图标库
import './assets/font/iconfont.css'

// 图片懒加载
import lazyLoad from 'vue-lazyload'

// 引入axios发送ajax
import axios from 'axios'

// 配置axios
Vue.prototype.axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 6000
// 发送axios后，响应拦截
axios.interceptors.response.use((response) => {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert('用户不存在')
  }
})

// 图片懒加载配置
Vue.use(lazyLoad, {
  loading: './../loading-svg/loading-spinning-bubbles.svg'
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.bus = this
  }
}).$mount('#app')

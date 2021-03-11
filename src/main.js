import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入图标库
import './assets/font/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 6000
// 请求拦截
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

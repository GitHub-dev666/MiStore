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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

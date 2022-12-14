import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import globalAPI from '../globalAPI'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.global = globalAPI
axios.defaults.baseURL = globalAPI.baseURL

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.requireAuth)) {
//     if (window.localStorage.token && window.localStorage.isLogin === '1') {
//       next()
//     } else if (to.path !== '/login') {
//       let token = window.localStorage.token;
//       if (token === 'null' || token === '' || token === undefined) {
//         next({ path: '/login' })
//       }
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

axios.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token')
  }
  return config;
})

axios.interceptors.response.use((res) => {
  return res;
}, (err) => {
  if (err.response.status == 401) {
    localStorage.removeItem('token')
    ElementUI.Message({
      message: err.response.data.detail,
      type: 'error'
    })
    router.push('/login')
  } else if (err.response.status == 400) {
    ElementUI.Message({
      message: err.response.data.detail,
      type: 'error'
    })
    router.push('/login')
  }
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

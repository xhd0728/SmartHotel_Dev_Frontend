import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

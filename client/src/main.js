import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

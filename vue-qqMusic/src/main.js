import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import Mint from 'mint-ui'
import axios from 'axios'
import animate from 'animate.css'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

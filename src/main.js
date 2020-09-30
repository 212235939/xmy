import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$axios = axios

import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
=======

>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
Vue.use(Vant);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

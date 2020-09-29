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
<<<<<<< HEAD

<<<<<<< HEAD


=======
=======
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
Vue.use(Vant);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

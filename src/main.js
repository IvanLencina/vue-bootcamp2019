import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import bulma from 'bulma'

Vue.use(VueAxios, axios)
Vue.use(bulma)

import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

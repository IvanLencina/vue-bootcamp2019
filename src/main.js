import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import bulma from 'bulma'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.use(VueAxios, axios);
Vue.use(bulma);
Vue.use(Buefy);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/ContactForm.vue'),
    },
    {
      path: '/countries/:code?',
      name: 'countries',
      component: () => import('./views/CountriesView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('./views/CounterVuex.vue')
    }
  ],
});

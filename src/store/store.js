import Vue from 'vue';
import Vuex from 'vuex';
import countries from './modules/countries'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    addOne (state) {
      state.count++
    },
  },
  actions: {
    increment (context) {
      context.commit('addOne')
    },
  },
  getters: {
    total: state => {
      return state.count
    },
  },
  modules: {
    countries: countries
  }
});

export default store;

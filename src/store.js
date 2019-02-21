import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    countries: []
  },
  mutations: {
    addOne (state) {
      state.count++
    },
    setCountries(state, countries) {
      state.countries = countries
    }
  },
  actions: {
    increment (context) {
      context.commit('addOne')
    },
    async getCountries (context) {
      try {
        const response = await Vue.axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code');

        context.commit('setCountries', response.data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async getCountryData(context, selectedCountry) {
      try {
        const response = await Vue.axios.get(
          `https://restcountries.eu/rest/v2/alpha/${selectedCountry.alpha2Code}`
        );

        return response.data
      } catch (e) {
        throw new Error(e)
      }
    },
  },
  getters: {
    total: state => {
      return state.count
    },
    countries: state => {
      return state.countries
    },
    getCountryByCode: (state) => (code) => {
      return state.countries.find(country => country.alpha2Code === code)
    }
  }
});

export default store;

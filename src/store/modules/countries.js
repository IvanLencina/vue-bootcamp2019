import Vue from 'vue'
import Vuex from 'vuex'
import ActionTypes from '../action-types'

Vue.use(Vuex)

const countries = {
  state: {
    countries: []
  },
  mutations: {
    setCountries (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    async [ActionTypes.GET_COUNTRIES] (context) {
      try {
        const response = await Vue.axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')

        context.commit('setCountries', response.data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async [ActionTypes.GET_COUNTRY_DATA] (context, selectedCountry) {
      try {
        const response = await Vue.axios.get(
          `https://restcountries.eu/rest/v2/alpha/${selectedCountry.alpha2Code}`
        )

        return response.data
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {
    countries: state => {
      return state.countries
    },
    getCountryByCode: (state) => (code) => {
      return state.countries.find(country => country.alpha2Code === code)
    }
  }
}

export default countries

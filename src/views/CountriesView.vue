<template>
  <section class="countries container">
    <select class="countries-select" v-model="selectedCountry">
      <option
        v-for="(country, index) in countries"
        :key="index"
        :value="country">
        {{ country.name }}
      </option>
    </select>

    <div v-if="selectedCountryData" class="country-data">
      <h1 class="country-name">{{ selectedCountryData.name }}</h1>
      <img
        :src="selectedCountryData.flag"
        class="flag">
    </div>

  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import ActionTypes from '../store/action-types'

export default {
  name: 'CountriesView',
  data () {
    return {
      selectedCountry: null,
      selectedCountryData: null
    }
  },
  computed: {
    ...mapGetters([
      'countries'
    ])
  },
  watch: {
    async selectedCountry () {
      this.$router.push(
        {
          name: 'countries',
          params: {
            code: this.selectedCountry.alpha2Code
          }
        }
      )

      try {
        this.selectedCountryData = await this.$store.dispatch(ActionTypes.GET_COUNTRY_DATA, this.selectedCountry)
      } catch (e) {
        console.log(e)
      }
    },
    '$route': function (routeVal) {
      this.setCountryData()
    }
  },
  async created () {
    try {
      await this.$store.dispatch(ActionTypes.GET_COUNTRIES)

      if (this.$route.params.code) {
        this.setCountryData()
      }
    } catch (e) {
      // log.
    }
  },
  methods: {
    setCountryData () {
      const country = this.$store.getters.getCountryByCode(
        this.$route.params.code
      )

      if (country) {
        this.selectedCountry = country
      }
    }
  }
}
</script>
<style lang="scss">
h1.country-name {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 10vh auto 3vh auto;
}
</style>

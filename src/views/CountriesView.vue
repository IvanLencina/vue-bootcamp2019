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

    {{ selectedCountryData }}
  </section>
</template>
<script>
  export default {
    name: 'CountriesView',
    data() {
      return {
        countries: [],
        selectedCountry: null,
        selectedCountryData: null
      }
    },
    watch: {
      async selectedCountry() {
        this.$router.push(
          {
            name: 'countries',
            params: {
              code: this.selectedCountry.alpha2Code
            }
          }
        )

        try {
          this.selectedCountryData = await this.getCountryData();
        } catch (e) {
          console.log(e)
        }
      },
      '$route': function(routeVal) {
        this.setCountryData()
      }
    },
    async created() {
      try {
        this.countries = await this.getCountries();

        if (this.$route.params.code) {
          this.setCountryData()
        }
      } catch (e) {
        // log.
      }
    },
    methods: {
      setCountryData() {
        const country = this.getCountryByCode(this.$route.params.code);

        if (country) {
          this.selectedCountry = country
        }
      },
      async getCountries() {
        try {
          const response = await this.$http.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code');

          return response.data
        } catch (e) {
          throw new Error(e)
        }
      },
      async getCountryData() {
         try {
           const response = await this.$http.get(
             `https://restcountries.eu/rest/v2/alpha/${this.selectedCountry.alpha2Code}`
           );

           return response.data
         } catch (e) {
            throw new Error(e)
         }
      },
      getCountryByCode(code) {
        return this.countries.find(country => country.alpha2Code === code)
      }
    }
  }
</script>
<style lang="scss">

</style>

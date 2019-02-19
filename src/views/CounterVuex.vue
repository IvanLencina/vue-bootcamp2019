<template>
    <div class="container">
      <span class="total">{{ total }}</span>
      <button
        class="increment"
        @click="increment">
        Incrementar
      </button>
    </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: "CounterVuex",
    computed: {
      ...mapGetters([
        'total',
        // otro getter,
        // otro mas
      ])
    },
    methods: {
      increment() {
        this.$store.dispatch('increment')
      }
    }
  }
</script>

<style lang="scss" scoped>
 div.container {
   text-align: center;
   font-size: 3rem;

   span.total {
     display: block;
   }
 }
</style>

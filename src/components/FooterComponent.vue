<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <button @click="increment">
        Incrementar contador
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    increment () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style scoped>
  footer {
    position: absolute;
    bottom: -3vh;
    z-index: 99999;
    width: 100%;
    padding: 1rem;
  }
</style>

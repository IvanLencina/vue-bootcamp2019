<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item brand-text">
          Bulma Admin
        </router-link>
        <div class="navbar-burger burger" :class="{ 'is-active': isMenuActive }" data-target="navMenu" @click="toggleMenuVisibility">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <router-link :to="{ name: 'home' }" class="button is-primary">Home</router-link>
          <router-link :to="{ name: 'contact' }" class="button is-primary">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenuVisibility () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style lang="scss" scoped>
  nav.navbar {
    position: relative;
    div.container {
      div.navbar-menu {
        div.navbar-end {
          a {
            margin: 2rem 0.5rem;
          }
        }
      }
    }
  }
</style>

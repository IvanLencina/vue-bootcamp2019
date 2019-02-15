<template>
  <div id="app">
    <header-component></header-component>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent'
  import FooterComponent from './components/FooterComponent'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
#app {
  div.main-content {
    min-height: 100vh;
    /*padding-bottom: 10vh;*/
    padding: 5vh 0 10vh 0;
  }
}
</style>

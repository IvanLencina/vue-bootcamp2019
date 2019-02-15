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
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  div.main-content {
    height: 100%;
  }
}
</style>

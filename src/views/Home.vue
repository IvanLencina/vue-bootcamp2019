<template>
    <div class="home-container">
        Esta es la home

        <router-link :to="{ name: 'contact' }">Contacto</router-link>
    </div>
</template>
<script>
    import HeaderComponent from '../components/HeaderComponent'

    export default {
      name: 'Home',
      data() {
        return {

        }
      },
      components: {
        HeaderComponent
      }
    }
</script>
<style lang="scss">

</style>
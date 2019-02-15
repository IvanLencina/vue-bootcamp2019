<template>
    <div class="home-container">
        <post-view></post-view>
    </div>
</template>
<script>
  import PostView from './PostView';

  export default {
      name: 'Home',
      data() {
        return {

        }
      },
      components: {
        PostView
      }
    }
</script>
<style lang="scss">

</style>

<template>
    <div class="comment">
        <p>{{ commentText }}</p>
    </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      commentText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
    div.comment {
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
</style>
<template>
    <div class="comments-container">
        <span class="comment-counter">
            {{ count }}
        </span>
        <span>Comentarios</span>
    </div>
</template>

<script>
  export default {
    name: "CommentCounter",
    props: {
      count: {
        type: Number,
        default() {
          return 0
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    div.comments-container {
        position: fixed;
        top: 10%;
        right: 15%;
        span.comment-counter {
            background: rgba(green, 0.7);
            color: #fff;
            padding: 0.2rem;
            border-radius: 50%;
        }
    }
</style>
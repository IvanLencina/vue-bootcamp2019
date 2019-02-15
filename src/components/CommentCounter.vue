<template>
  <div class="comments-container">
    <div class="badge">
      <span class="comment-counter">
        {{ count }}
      </span>
    </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    div.badge {
      display: flex;
      margin: 0 0.5rem;
      span.comment-counter {
        width: 1.8rem;
        background: rgba(green, 0.7);
        color: #fff;
        padding: 0.15rem;
        border-radius: 50%;
        text-align: center;
      }
    }
  }
</style>

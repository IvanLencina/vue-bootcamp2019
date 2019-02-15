<template>
  <div class="post-container">
    <img :src="imgUrl" alt="logo" class="post-logo">

    <h3>Comentarios</h3>
    <comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment-text="comment"/>
    <comment-form @text-submitted="addComment"/>
  </div>
</template>

<script>
  import Comment from './Comment'
  import CommentForm from './CommentForm'

  export default {
    name: "Post",
    props: {
      imgUrl: {
        type: String,
        required: true
      },
      comments: {
        type: Array,
        required: false,
        default() {
          return []
        }
      }
    },
    components: {
      Comment,
      CommentForm
    },
    methods: {
      addComment(text) {
        this.$emit('comment-added', text)
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.post-container {
    flex: 1;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    img.post-logo {
      max-width: 35vw;
    }
  }
</style>

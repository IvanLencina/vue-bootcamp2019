<template>
    <section class="post-view">
        <post
           v-if="catImgUrl"
           :img-url="catImgUrl"
           :comments="comments"
           @comment-added="addComment"/>

        <comment-counter :count="commentsCount"/>
    </section>
</template>

<script>
  import Post from '../components/Post'
  import CommentCounter from '../components/CommentCounter'

  export default {
    name: "PostView",
    components: {
      Post,
      CommentCounter
    },
    data() {
      return {
        catImgUrl: null,
        comments: []
      }
    },
    created() {
      this.$http.get('https://aws.random.cat/meow').then((response) => {
        this.catImgUrl = response.data.file;
      }).catch((e) => {
        console.log(e);
      });
    },
    methods: {
      addComment(comment) {
        this.comments.push(comment)
      }
    },
    computed: {
      commentsCount() {
        return this.comments.length
      }
    }
  }
</script>

<style lang="scss" scoped>
    section.post-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
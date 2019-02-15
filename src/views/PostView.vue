<template>
    <section class="post-view">
      <div class="columns">
        <div class="column">
          <post
            v-if="catImgUrl"
            :img-url="catImgUrl"
            :comments="comments"
            @comment-added="addComment"/>
        </div>
        <div class="column">
          <comment-counter :count="commentsCount"/>
        </div>
      </div>
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
    async created() {
      try {
        const response = await this.$http.get('https://aws.random.cat/meow');
        this.catImgUrl = response.data.file;
      } catch (e) {
        // log error
      }
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

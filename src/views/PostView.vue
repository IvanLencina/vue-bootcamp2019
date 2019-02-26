<template>
    <section class="post-view">
      <div class="columns">
        <div class="column">
          <post
            v-if="catImgUrl"
            :img-url="catImgUrl"
            :comments="comments"
            @comment-added="addComment"
            @image-loaded="closeSpinner"/>
        </div>
        <div class="column">
          <comment-counter :count="commentsCount"/>
          <div class="reload-image-container" @click="reloadImage">
            <span class="icon has-text-info">
              <i class="fas fa-redo-alt"></i>
            </span>
            <span>Reload</span>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Post from '../components/Post'
import CommentCounter from '../components/CommentCounter'

export default {
  name: 'PostView',
  components: {
    Post,
    CommentCounter
  },
  data () {
    return {
      catImgUrl: null,
      comments: [],
      spinner: null
    }
  },
  async created () {
    await this.reloadImage()
  },
  methods: {
    addComment (comment) {
      this.comments.push(comment)
    },
    async reloadImage () {
      this.spinner = this.$loading.open()

      try {
        const response = await this.$http.get('https://aws.random.cat/meow')
        this.catImgUrl = response.data.file
      } catch (e) {
        // log error
        this.closeSpinner()
      }
    },
    closeSpinner () {
      if (this.spinner) {
        this.spinner.close()
      }
    }
  },
  computed: {
    commentsCount () {
      return this.comments.length
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~bulma/sass/utilities/mixins";
    section.post-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

      div.reload-image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        cursor: pointer;
      }

      @include from($tablet) {
        div.reload-image-container {
          display: block;
        }
      }
    }
</style>

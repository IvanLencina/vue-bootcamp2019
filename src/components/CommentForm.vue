<template>
    <div class="comment-form-container">
        <input type="text" v-model="text" ref="commentInput">
        <button class="submit" @click="submitComment">
            Enviar
        </button>
    </div>
</template>

<script>
  export default {
    name: "CommentForm",
    data() {
      return {
        text: ''
      }
    },
    methods: {
      submitComment() {
        this.$emit('text-submitted', this.text);

        this.focusInput();
        this.clearInput();
      },
      focusInput() {
        this.$refs.commentInput.focus();
      },
      clearInput() {
        this.text = '';
      }
    }
  }
</script>

<style scoped>

</style>
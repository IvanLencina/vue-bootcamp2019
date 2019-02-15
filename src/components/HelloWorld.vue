<template>
  <div class="hello">
    <input type="email" class="email" v-model="email">
    <button @click="verifyEmail">Verificar</button>

    <p class="version">{{ version }}</p>

    <h2>Esto es lo  que esta en el input: {{ email }}</h2>
    <h2>Tamaño del input: {{ emailLength }}</h2>

    <p :class="{'has-error': !isEmailValid, 'is-valid': isEmailValid}">
      {{ isEmailValid ? 'Es valido!' : 'Inválido'  }}
    </p>

    <img
       v-show="catImgUrl"
       :src="catImgUrl"
       @click="fetchCatImg"
       alt="cat"
       class="cat">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    version: String,
  },
  data() {
    return {
      email: null,
      isEmailValid: false,
      catImgUrl: null
    }
  },
  computed: {
    emailLength() {
      if (!this.email) {
        return 0;
      }

      return this.email.length;
    }
  },
  methods: {
    verifyEmail() {
      this.isEmailValid = this.email.indexOf('@') > -1;
    },
    fetchCatImg() {
      this.catImgUrl = null;

      this.$http.get('https://aws.random.cat/meow').then((response) => {
        this.catImgUrl = response.data.file;
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  watch: {
    email(newVal, oldVal) {
      console.log('Nuevo valor: ', newVal);
      console.log('Anterior: ', oldVal);
    }
  },
  created() {
    this.fetchCatImg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  &.has-error {
    text-decoration: underline;
  }
  &.is-valid {
    font-size: 5rem;
  }
}

img.cat {
  width: 50vw;
}
</style>

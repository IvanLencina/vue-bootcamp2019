<template>
  <div class="calculator-container">
    <p>Numero 1</p>
    <input type="number" v-model="a" />

    <p>Número 2</p>
    <input type="number" v-model="b" />

    <br/>

    <button id="sum" @click="suma">Suma</button>

    <p>Resultado: {{result}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      a: null,
      b: null,
      result: null
    }
  },
  methods: {
    suma () {
      this.result = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>

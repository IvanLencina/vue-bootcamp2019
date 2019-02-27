<template>
  <div class="calculator-container">
    <p>Numero 1</p>
    <input id="inputA" type="number" v-model="a" />

    <p>Número 2</p>
    <input id="inputB" type="number" v-model="b" />

    <br/>

    <button id="sum" @click="suma">Suma</button>
    <button id="multiply" @click="multiply">Multiplicar</button>
    <button id="division" @click="divide">Dividir</button>

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
    },
    multiply () {
      this.result = Number(this.a) * Number(this.b)
    },
    divide () {
      this.result = Number(this.a) / Number(this.b)
    }
  }
}
</script>

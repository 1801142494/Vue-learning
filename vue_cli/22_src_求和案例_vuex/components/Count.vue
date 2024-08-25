<template>
  <div>
    <h2>当前的和是{{$store.state.sum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increace">+</button>
    <button @click="decreace">-</button>
    <button @click="oddIncreace">当是奇数＋</button>
    <button @click="waitIncreace">等一等＋</button>
  </div>
</template>

<script>
    export default {
      name:'Count',
      data() {
        return {
          n:1
        }
      },
      methods: {
        increace(){
          this.$store.dispatch('jia',this.n)
        },
        decreace(){
          this.$store.dispatch('jian',this.n)
        },
        oddIncreace(){
          this.$store.dispatch('jiaOdd',this.n)

        },
        waitIncreace(){
          this.$store.dispatch('jiaWait',this.n)
        },

      },
    }
</script>

<style>
  button{
    margin: 5px;
  }
</style>
<template>
  <div>
    <h2>当前的和是{{sum}}</h2>
    <h2>当前的和放大后是{{bigSum}}</h2>
    <h2>我在{{school}}学习{{subject}}</h2>
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
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    export default {
      name:'Count',
      data() {
        return {
          n:1
        }
      },
      computed:{
        // mapState和mapGetter用来快速实现功能代码
        // 1.导入vuex
        // 2.在computed属性里使用

        // 正常手写
        // sum(){
        //   return this.$store.state.sum
        // },
        // school(){
        //   return this.$store.state.school
        // },
        // subject(){
        //   return this.$store.state.subject
        // },
        // bigSum(){
        //   return this.$store.getters.bigSum
        // }

        // 借助mapState生成计算属性，从state中获取数据。（对象写法）
        // ...mapState({sum:'sum',subject:'subject',school:'school'}),
        // 数组写法
        ...mapState(['sum','subject','school']),

       
        // 借助mapGetters生成计算属性 同上
        // ...mapGetters({bigSum:'bigSum'}),
        ...mapGetters(['bigSum']),
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
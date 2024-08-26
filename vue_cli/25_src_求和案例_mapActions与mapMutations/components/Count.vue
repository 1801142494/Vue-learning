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
    <button @click="increace(n)">+</button>
    <button @click="decreace(n)">-</button>
    <button @click="oddIncreace(n)">当是奇数＋</button>
    <button @click="waitIncreace(n)">等一等＋</button>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
      name:'Count',
      data() {
        return {
          n:1
        }
      },
      computed:{
        // 借助mapState生成计算属性，从state中获取数据。
        ...mapState(['sum','subject','school']),
       
        // 借助mapGetters生成计算属性
        ...mapGetters(['bigSum']),
      },
      methods: {
        // increace(){
        //   this.$store.commit('JIA',this.n)
        // },
        // decreace(){
        //   this.$store.commit('JIAN',this.n)
        // },

        // 借助mapMutations生成方法,方法中会调用commit去联系Mutations
        // 注：需在点击事件传参（不传参默认传过去event）
        ...mapMutations({increace:'JIA',decreace:'JIAN'}),
        // ...mapMutations(['JIA','JIAN']),
        // ————————————————————————————————————————————————————————>
        // oddIncreace(){
        //   this.$store.dispatch('jiaOdd',this.n)

        // },
        // waitIncreace(){
        //   this.$store.dispatch('jiaWait',this.n)
        // },

        // 借助mapActions生成方法,方法中会调用dispatch去联系Actions
        ...mapActions({oddIncreace:'jiaOdd',waitIncreace:'jiaWait'}),
        // ...mapActions(['jiaOdd','jiaWait']),
      },
    }
</script>

<style>
  button{
    margin: 5px;
  }
</style>
<template>
  <div>
    <h2>当前的和是{{sum}}</h2>
    <h2>当前的和放大后是{{bigSum}}</h2>
    <h2>我在{{school}}学习{{subject}}</h2>
    <h2>Person组件总人数是{{personList.length}}</h2>
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
        // vuex模块化,在map...生成的基础上前面加上对应的配置对象
        //      注：这样写配置里必须设置namespaced:true,

        // 借助mapState生成计算属性，从state中获取数据。
        ...mapState('countAbout',['sum','subject','school','personList']),
        ...mapState('personAbout',['personList']),
        // 借助mapGetters生成计算属性
        ...mapGetters('countAbout',['bigSum']),
      },
      methods: {
        // 借助mapMutations生成方法,方法中会调用commit去联系Mutations
        ...mapMutations('countAbout',{increace:'JIA',decreace:'JIAN'}),
        
        // 借助mapActions生成方法,方法中会调用dispatch去联系Actions
        ...mapActions('countAbout',{oddIncreace:'jiaOdd',waitIncreace:'jiaWait'}),
      },
    }
</script>

<style>
  button{
    margin: 5px;
  }
</style>
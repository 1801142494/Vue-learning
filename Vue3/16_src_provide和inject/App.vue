<template>
  <div class="app">
    <h2>车辆信息：{{name}}——{{price}}</h2>
    <Child/>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
  import Child from './components/Child'
  export default {
    name:'App',
    components:{Child},
    setup() {
      const car =reactive({
        name:'比亚迪',
        price:'80k'
      })
      // provide（键，值）可以为后代组件提供数据
      provide('car',car)
      return{...toRefs(car)}
    }
  }
</script>

<style>
  .app{
    background-color: #ccc;
    padding: 10px;
  }
</style>
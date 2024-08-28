<template>
  <div class="son">
    <h3>车辆信息:{{car.name}}——{{car.price}}</h3>
  </div>
</template>

<script>
import { inject } from 'vue'
  export default {
    name:'Son',
    setup(){
        // 后代可以通过inject获取祖组件用provide提供的数据
        const car=inject('car')
        return{car}
    }
  }
</script>

<style scope>
 .son{
    background-color: orange;
    padding: 10px;
 }
</style>
<template>
    <h2>我是App组件</h2>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref,} from 'vue'
  export default {
    name:'App',
    setup() {
      const car =reactive({
        name:'比亚迪',
        price:'80k'
      })
      let sum=ref(0)
      const car2 =readonly(car)

      //判断数据类型
      console.log(isRef(sum));
      console.log(isReactive(car));
      console.log(isReadonly(car2));
      console.log(isProxy(car));
      console.log(isProxy(car2));

      return{}
    }
  }
</script>

<style>
  .app{
    background-color: #ccc;
    padding: 10px;
  }
</style>
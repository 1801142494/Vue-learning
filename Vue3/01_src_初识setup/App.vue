<template>
  <!-- vue3的模板根标签可以不用div包裹 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
  import {h} from 'vue'
  export default {
    name: 'App',
    components: {},
    //vue3中可以用vue2的用法，但不能混用 

    // vue3的数据、方法等等都写在setup里
    setup() {
      // 这里是函数体

      // 数据
      let name='张三'
      let age=18

      // 方法
      function sayHello(){
        alert(`我叫${name}，我的年龄是${age}`)
      }

      // setup需要设置返回值,数据必须返回才能使用
      //  1.返回一个对象
      return {
        name,
        age,
        sayHello
      }

      // 2.返回一个渲染函数，需引入vue中的h
      // return ()=>h('h1','Hello')
    }
}
</script>

<style>

</style>

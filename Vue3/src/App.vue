<template>
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

    setup() {
      // 数据
      let name='张三'
      let age=18

      // 方法
      function sayHello(){
        alert(`我叫${name}，我的年龄是${age}`)
      }

      // setup需要设置返回值，数据必须返回才能使用
      //  1.返回一个对象
      return {
        name,
        age,
        sayHello
      }
    }
}
</script>

<style>

</style>

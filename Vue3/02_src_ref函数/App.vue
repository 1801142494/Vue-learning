<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>职位：{{job.type}}</h2>
  <h2>工资：{{job.salary}}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
  //引入ref 
  import {ref} from 'vue'
  export default {
    name: 'App',
    components: {},

    setup() {
      // 数据
      let name=ref('张三')// 通过ref实现响应式
      let age=ref(18)
      const job=ref({
        type:'前端工程师',
        salary:'10k'
      })

      // 方法
      function changeInfo(){
        // name.value='李四'
        // age.value=48
        console.log(job.value);
        console.log(job.value.type);
        console.log(job.value.salary);
        
        console.log(`我叫${name.value}，我的年龄是${age.value}`);
      }

      // setup需要设置返回值，数据必须返回才能使用
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
}
</script>

<style>

</style>

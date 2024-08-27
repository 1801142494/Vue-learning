<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>职位：{{person.job.type}}</h2>
  <h2>工资：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <h2>测试的数据c:{{person.job.a.b.c}}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    components: {},

    setup() {
      // 数据
      //用reactive实现响应式（reactive只能处理对象）
      const person=reactive({
        name:'张三',
        age:18,
        hobby:['抽烟','喝酒','打架','烫头'],
        job:{
          type:'前端工程师',
          salary:'10k',
          a:{
            b:{
              c:666
            }
          }
        }
      })

      // 方法
      function changeInfo(){
        person.name='李四'
        person.age=28
        person.job.type='UI设计师'
        person.job.salary='15k'
        person.job.a.b.c=999
        person.hobby[0]='学习'
      }

      return {
        person,
        changeInfo
      }
    }
}
</script>

<style>

</style>

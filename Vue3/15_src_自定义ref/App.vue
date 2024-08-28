<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>
import { customRef, ref } from 'vue'
 
  export default {
    name: 'App',
    setup(){
      // 自定义一个ref——名为myRef
      function myRef(value,delay){
        let timer
        // 返回一个customRef函数里面有track,trigger两个参数
        return customRef((track,trigger)=>{
          // 返回一个对象，里面get和set方法
          return {
            get(){
              console.log(`有人查看数据，我返回了${value}`);
              track()//通知vue跟踪value
              return value
            },
            set(newValue){
              console.log(`有人修改数据，修改为${newValue}`);
              clearTimeout(timer)
              timer=setTimeout(()=>{
                value =newValue
                trigger()//通知vue刷新模板
              },delay)
             
            }
          }
        })
      }

      // let keyword =ref('')//使用vue提供的ref
      let keyword =myRef('hello',500)

      return{keyword}
    }
  }
</script>

<style>

</style>

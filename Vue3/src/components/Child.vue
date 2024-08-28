<template>
  <div class="child">
    <h2>Child组件</h2>
    {{sum}}
  </div>
</template>

<script>
    export default {
        name:'Child',
        setup(){
          let sum=0

          return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              // 等待三秒返回
              resolve({sum})
            },1000)
          })
        }
    }
</script>

<style scope>
 .child{
    background-color: skyblue;
    padding: 10px;
 }
</style>
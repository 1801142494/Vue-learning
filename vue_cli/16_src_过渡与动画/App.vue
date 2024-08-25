<template>
  <div id="app">
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
    import Test from './components/Test.vue'
    import Test2 from './components/Test2.vue'
    import Test3 from './components/Test3.vue'
    export default {
        name:'App',
        components:{
            Test,
            Test2,
            Test3
        }
    }
</script>

<style>
  .box{
    height: 70px;
    width: 100%;
    border-radius: 10px;
    margin: 10px 0px;
  }
</style>
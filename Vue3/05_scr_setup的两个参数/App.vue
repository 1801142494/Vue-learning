<template>
  <Demo @hello="showHelloMsg" name="张三" age="18">
    <template v-slot:xyj>
      <span>西游记</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components: {Demo},
    setup(){
      function showHelloMsg(val){
        alert(`你好,你触发了hello事件，收到的参数是${val}`)
      }

      return {
        showHelloMsg
      }
    }
  }
</script>

<style>

</style>

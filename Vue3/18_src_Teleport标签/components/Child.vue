<template>
  <div class="child">
    <h2>Child组件</h2>
    <Son/>
  </div>
</template>

<script>
    import Son from './Son'
    export default {
        name:'Child',
        components:{Son},
    }
</script>

<style scope>
 .child{
    background-color: skyblue;
    padding: 10px;
 }
</style>
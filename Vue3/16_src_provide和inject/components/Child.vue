<template>
  <div class="child">
    <h2>车辆信息</h2>
    <Son/>
  </div>
</template>

<script>
    import Son from './Son'
    export default {
        name:'Child',
        components:{Son},
        mounted(){
            console.log();
            
        }
    }
</script>

<style scope>
 .child{
    background-color: skyblue;
    padding: 10px;
 }
</style>
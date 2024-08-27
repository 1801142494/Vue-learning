<template>
    <div>
        <h5>消息ID:{{id}}</h5>
        <h5>消息标题:{{name}}</h5>
        <hr>
    </div>
</template>

<script> 
    export default {
        name:'Detail',
        props:['id','name']
    }
</script>

<style>

</style>
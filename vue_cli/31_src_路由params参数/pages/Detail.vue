<template>
    <div>
        <!-- 获取路由里params参数的数据 -->
        <h5>消息ID:{{$route.params.id}}</h5>
        <h5>消息标题:{{$route.params.name}}</h5>
    </div>
</template>

<script> 
    export default {
        name:'Detail'
    }
</script>

<style>

</style>
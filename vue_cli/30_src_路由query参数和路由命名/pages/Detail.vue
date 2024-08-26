<template>
    <div>
        <!-- 获取路由里query参数的数据 -->
        <h5>消息ID:{{$route.query.id}}</h5>
        <h5>消息标题:{{$route.query.name}}</h5>
    </div>
</template>

<script> 
    export default {
        name:'Detail'
    }
</script>

<style>

</style>
<template>
    <div class="box">
        <h2>学生：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
               name:'张三10086',
               age:18
            }
        },
    }   
</script>

// 通过scoped设置样式为局部样式
<style scoped>
    .box{
        background-color: orange;
        margin: 10px;
    }
</style>
<template>
    <div class="box">
        <h2>学生：{{name | mySlice}}</h2>
        <h2>年龄：{{age}}</h2>
        <input type="text" v-fbind:value="name">
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

<style>
    .box{
        background-color: skyblue;
        margin: 10px;
    }
</style>
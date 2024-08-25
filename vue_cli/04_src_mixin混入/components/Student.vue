<template>
    <div class="box">
        <h2 @click="showName">学生：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
    // import {hunhe} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
               name:'张三',
               age:18
            }
        },
        // mixins:[hunhe]
    }   
</script>

<style>
    .box{
        background-color: skyblue;
        margin: 10px;
    }
</style>
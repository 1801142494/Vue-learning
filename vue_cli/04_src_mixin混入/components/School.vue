<template>
    <div class="box">
        <h2 @click="showName">学校：{{name}}</h2>
        <h2>地址：{{adress}}</h2>
    </div>
</template>

<script>
    // import {hunhe} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
               name:'老铁培训',
               adress:'南京'
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
<template>
    <div class="box">
        <h2>学校：{{name}}</h2>
        <h2>地址：{{adress}}</h2>
        <button @click="getAlert">Hello</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
               name:'老铁培训',
               adress:'南京'
            }
        },
        methods:{
            getAlert(){
                this.demo()
            }
        }
    }   
</script>

<style>
    .box{
        background-color: skyblue;
        margin: 10px;
    }
</style>
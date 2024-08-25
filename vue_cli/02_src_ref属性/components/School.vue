<template>
    <div class="box">
        <h2>学校名：{{name}}</h2>
        <h2>学校地址：{{adress}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'白马培训',
                adress:'河南郑州'
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
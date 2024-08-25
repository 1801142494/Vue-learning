<template>
    <div class="box">
        <h2>学校：{{name}}</h2>
        <h2>地址：{{adress}}</h2>
        <button @click="sendMsg">传递给父组件信息</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
               name:'老铁培训',
               adress:'南京'
            }
        },
        methods:{
            sendMsg(){
                this.getSchoolName(this.name);
            }
        }
    }   
</script>

// 通过scoped设置样式为局部样式
<style scoped>
    .box{
        background-color: skyblue;
        margin: 10px;
    }
</style>
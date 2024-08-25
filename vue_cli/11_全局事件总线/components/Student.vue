<template>
    <div class="box">
        <h2>学生：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="getStudentName">点我发送给学校姓名</button>

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
        methods:{
            getStudentName(){
                this.$bus.$emit('demo',this.name);
            }
        }
    }   
</script>

// 通过scoped设置样式为局部样式
<style scoped>
    .box{
        background-color: orange;
        margin: 10px;
    }
</style>
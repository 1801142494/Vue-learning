<template>
    <div class="box">
        <h2>学校：{{name}}</h2>
        <h2>地址：{{adress}}</h2>
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
            getStudentName(data){
                console.log('我是school组件，我收到了---'+data);
                
            }
        },
        mounted() {
            this.$bus.$on('demo',this.getStudentName)
        },
        beforeDestroy(){
            // 销毁总线事件
            this.$bus.$off('demo')
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
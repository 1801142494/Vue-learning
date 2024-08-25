<template>
    <div class="box">
        <h2>学生：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="sendMsg">传递给父组件信息</button>
        <button @click="unbind">解绑自定义事件</button>
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
            sendMsg(){
                // 触发Student组件实例对象上的getName事件
                this.$emit('getName',this.name)
                this.$emit('demo')
                
            },
            unbind(){
                // this.$off('getName') //解绑一个自定义事件
                // this.$off('getName') //解绑一个自定义事件
                this.$off() //解绑所有自定义事件

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
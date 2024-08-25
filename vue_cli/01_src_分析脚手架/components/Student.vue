<template>
    <div>
        <!-- 组件的结构 -->
        <h2>姓名：{{name}}</h2>  
        <h2>年龄：{{age}}</h2>  
        <button @click="welcome">点我欢迎</button>
    </div>
</template>
  
<script>
    // 组件的交互相关代码（数据，方法等）
    export default ({
        name:'MyStudent',
        data() {
            return {
                name:'李四',
                age:20
            }
        },
        methods: {
            welcome(){
                alert(`欢迎${this.name}的到来！`)
            }
        },
    })
</script>

<style>
    /* 组件的样式 */
</style>
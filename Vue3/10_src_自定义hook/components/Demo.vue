<template>
    <h2>当前的和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>点击后获取鼠标的坐标：x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
    import {ref} from 'vue'

    // 引入
    import usepoint from '../hooks/usePoint'
    export default {
        name:'Demo',
        setup(){

            //数据
            let sum =ref(0)
            
            // 使用hooks里封装好的功能
            const point=usepoint()

            return{sum,point}
        },
   }
</script>

<style>
</style>
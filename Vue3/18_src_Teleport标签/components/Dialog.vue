<template>
    <button @click="isShow=true">点我弹窗</button>

    <!-- teleport使得内容传送到指定位置  -->
    <teleport to="body">
        <div class="mask" v-if="isShow">
             <div class="dialog" >
                <button @click="isShow=false" class="close">点我关闭</button>
                <h1>我是标题</h1>
                <h2>内容消息</h2>
                <h2>内容消息</h2>
                <h2>内容消息</h2>
            </div>
        </div>
       
    </teleport>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Dialog',
        setup(){
            let isShow =ref(false)

            return{isShow}
        }
    }
</script>

<style>
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .dialog{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 300px;
        background-color: pink;
    }
    .close{
        position: absolute;
        top: 6px;
        right: 6px;
    }
</style>
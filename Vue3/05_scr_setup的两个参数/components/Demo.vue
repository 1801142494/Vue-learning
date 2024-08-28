<template>
    <h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <slot name="xyj">默认信息</slot>
    <button @click="test">测试触发Demo组件的自定义事件</button>
</template>

<script>
    export default {
        name:'Demo',
        props:['name','age'],
        emits:['hello'],
        setup(props,context){
            // console.log('---setup---');
            console.log(props);
            // console.log(context);
            // console.log(context.attrs); //与vue2的$attrs一样
            // console.log(context.emit); //触发自定义事件
            console.log(context.slots); //插槽
            
            function test(){
                context.emit('hello',666)
            }
           
            return{
                test
            }
        },
        beforeCreate(){
            // console.log('---beforeCreate---');
        },
    }
</script>

<style>

</style>
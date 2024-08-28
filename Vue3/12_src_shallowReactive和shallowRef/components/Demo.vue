<template>
    <h2>当前x.y的值是：{{x.y}}</h2>
    <button @click="x.y++">增加y</button>
    <hr>
    <h2>{{person}}</h2>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j.salary}}k</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j.salary++">增加薪资</button>
</template>

<script>
    import { reactive, shallowReactive, shallowRef, ref,toRef, toRefs } from 'vue'
    export default {
        name:'Demo',
        setup(){
            //数据
            // const person =shallowReactive({//只做第一层的响应式
            const person =reactive({
                name:'王五',
                age:18,
                job:{
                    j:{
                        salary:10
                    }
                }
            })

            // let x=shallowRef({//只处理基本数据类型，不处理对象
            let x=ref({
                y:1
            })
            return{
                person,
                x,
                ...toRefs(person)
            }
        }
    }
</script>

<style>
</style>
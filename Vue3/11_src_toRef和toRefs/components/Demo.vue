<template>
    <h2>{{person}}</h2>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j.salary}}k</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j.salary++">增加薪资</button>
</template>

<script>
    import { reactive, toRef, toRefs } from 'vue'
    export default {
        name:'Demo',
        setup(){
            //数据
            const person =reactive({
                name:'王五',
                age:18,
                job:{
                    j:{
                        salary:10
                    }
                }
            })

            return{
                person,
                // toRef相当于把对象属性的地址指向，赋值给新的属性
                // name:toRef(person,'name'),
                // age:toRef(person,'age'),
                // salary:toRef(person.job.j,'salary'),

                // toRefs能够批量处理数据
                ...toRefs(person)
            }
        }
    }
</script>

<style>
</style>
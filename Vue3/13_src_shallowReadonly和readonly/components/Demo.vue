<template>
    <h2>当前的和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
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
    import { reactive,ref,toRefs,readonly,shallowReadonly } from 'vue'
    export default {
        name:'Demo',
        setup(){
            //数据
            let sum =ref(0)
            let person =reactive({
                name:'王五',
                age:18,
                job:{
                    j:{
                        salary:10
                    }
                }
            })

            // 生成一个新数据，并设为只读的
            person = readonly(person)
            
            // 只把第一层设为只读
            // person = shallowReadonly(person)

            sum = readonly(sum)
            // sum = shallowReadonly(sum)

            return{
                sum,
                ...toRefs(person)
            }
        }
    }
</script>

<style>
</style>
<template>
    <h2>当前的和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前信息为为：{{msg}}</h2>
    <button @click="msg+=1">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j.salary}}k</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j.salary++">增加薪资</button>
</template>

<script>
    import { reactive, ref, watch, watchEffect } from 'vue'
    export default {
        name:'Demo',
        setup(){
            //数据
            let sum =ref(0)
            let msg =ref('你好')
            const person =reactive({
                name:'王五',
                age:18,
                job:{
                    j:{
                        salary:10
                    }
                }
            })

            watch(sum,(newVal,oldVal)=>{
                console.log(`sum改变了`,newVal,oldVal);
            })

            //watchEffect 谁在里面执行就检测谁
            watchEffect(()=>{
                const x1=msg.value
                const x2=person.name
                const x3=person.job.j.salary
                console.log('watchEffect检测执行了');
            })
            return{sum,msg,person}
        }
    }
</script>

<style>
</style>
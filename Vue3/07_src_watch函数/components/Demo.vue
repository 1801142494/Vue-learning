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
    import { reactive, ref, watch } from 'vue'
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

            // 情况一：监视单个ref数据
            // watch(sum,(newVal,oldVal)=>{
            //     console.log(`sum改变了`,newVal,oldVal);
            // },{immediate:true})

            // 情况二：监视多个ref数据
            watch([sum,msg],(newVal,oldVal)=>{
                console.log(`sum改变了`,newVal,oldVal);
            },{immediate:true})

            // 情况三：监视reactive数据 
            //      1.此处获得的oldVal获取有问题
            //      2.deep深度检测强制一直开启
            // watch(person,(newVal,oldVal)=>{
            //     console.log(`person改变了`,newVal,oldVal);
            // })

            // 情况四：监视reactive数据的属性
            // watch(()=>person.age,(newVal,oldVal)=>{
            //     console.log(`age改变了`,newVal,oldVal);
            // })
            
            //情况五：监视reactive数据的多个属性
            watch([()=>person.name,()=>person.age],(newVal,oldVal)=>{
                console.log(`name和age改变了`,newVal,oldVal);
            })
            //情况六：监视reactive数据的属性值为对象
            watch(()=>person.job,(newVal,oldVal)=>{
                console.log(`salary改变了`,newVal,oldVal);
            },{deep:true})

            return{sum,msg,person}
        }
    }
</script>

<style>
</style>
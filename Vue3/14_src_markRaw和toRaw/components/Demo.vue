<template>
    <h2>当前的和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j.salary}}k</h2>
    <h3 v-show="person.car">车辆：{{person.car}}</h3>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j.salary++">增加薪资</button>
    <button @click="showRawPerson">展示toRaw</button>
    <button @click="addCar">添加一辆车</button>
    <button @click="person.car.name+='!'">改变车名</button>
    <button @click="person.car.price+='1'">改变车价格</button>
</template>

<script>
    import { markRaw, reactive,ref,toRaw,toRefs} from 'vue'
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

            function showRawPerson(){
                // toRaw让响应式变成普通数据
                console.log(person);
                const p =toRaw(person)
                console.log(p);
            }
            function addCar(){
                // markRaw使得新增的数据不是响应式
                person.car=markRaw({name:'宝马',price:"40k"})
                console.log(person.car);
            }
            
            return{
                sum,
                person,
                showRawPerson,
                addCar,
                ...toRefs(person)
            }
        }
    }
</script>

<style>
</style>
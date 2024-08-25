<template>
    <div class="box">
        <h2>{{msg}}</h2>
        <h2>学生：{{name}}</h2>
        <h2>年龄：{{myage}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="ageAdd">年龄+1</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                msg:'我是一个学生',
                myage:this.age
            }
        },
        methods: {
            ageAdd(){
                this.myage++
            }
        },
        // props属性 1.普通接收
        // props:['name','age','sex']

        //          2.限定接收属性
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        //    3.设置默认值的指定，和必要性的限制
        props:{
            name:{
                type:String,
                require:true
            },
            age:{
                type:Number,
                default:99
            },
            sex:{
                type:String,
                require:true
            }
        }
    }
</script>

<style>
    .box{
        background-color: skyblue;
        margin: 10px;
    }
</style>
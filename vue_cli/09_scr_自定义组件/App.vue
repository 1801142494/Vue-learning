<template>
    <div class="app">
        <!-- 通过父组件给子组件传递函数类型的prop 实现子给父传递数据-->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通过给子组件绑定自定义属性，再通过子组件实例的$emit方法调用并传参 -->
        <!-- <Student v-on:getName="getStudentName"/> -->

        <!-- 通过给子组件绑定ref属性，直接在父组件中给子组件设置方法 -->
        <Student ref="student"/>

    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        },
        methods: {
            getStudentName(name){
                console.log('app收到了学生名---'+name);
                
            },
            getSchoolName(val){
                console.log('app收到了学校名---'+val);
            },
            m1(){
                console.log("demo被调用了");
                
            }
        },
        mounted(){
            this.$refs.student.$on('getName',this.getStudentName)
            this.$refs.student.$on('demo',this.m1)
        }
    }
</script>

<style>
    .app{
        background-color: #ccc;
        padding: 10px 0;
    }
</style>
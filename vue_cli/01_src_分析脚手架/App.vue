<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    //可省略Vue.extend 
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>
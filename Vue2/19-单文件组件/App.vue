<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from './School.vue'
    import Student from './Student.vue'

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
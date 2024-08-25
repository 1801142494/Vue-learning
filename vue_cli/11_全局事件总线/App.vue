<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'星穹铁道',
            }
        },
        components:{
            School,
            Student
        },
    }
</script>

<style>
    .app{
        background-color: #ccc;
        padding: 10px 10px;
    }
</style>
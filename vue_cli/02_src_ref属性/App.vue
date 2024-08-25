<template>
    <div>
        <h1 ref="title">欢迎来到这里</h1>
        <button ref="btn" @click="getObj">点击获取标签对象</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        methods: {
            getObj(){
                console.log(this.$refs);
                
            }
        },
    }
</script>

<style>

</style>
<template>
    <div>
        <School name="张三" :age="18" sex="男"/>
        <School name="王丽" :age="19" sex="女"/>
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
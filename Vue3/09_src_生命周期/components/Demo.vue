<template>
    <h2>当前的和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
</template>

<script>
    import { ref,
    onBeforeMount,onMounted,
    onBeforeUpdate,onUpdated,
    onBeforeUnmount,onUnmounted } from 'vue'

    export default {
        name:'Demo',
        setup(){
            console.log('---setup---');

            //数据
            let sum =ref(0)

            // 通过组合式API的形式使用生命周期钩子
            onMounted(()=>{
                console.log('---onMounted---');
            })
            onBeforeMount(()=>{
                console.log('---onBeforeMount---');
                
            })
            onBeforeUpdate(()=>{
                console.log('---onBeforeUpdate---');
                
            })
            onUpdated(()=>{
                console.log('---onUpdated---');
                
            })
            onBeforeUnmount(()=>{
                console.log('---onBeforeUnmount---');
                
            })
            onUnmounted(()=>{
                console.log('---onUnmounted---');
                
            })

            return{sum}
        },

        // 通过配置项的形式使用生命周期钩子
        // #region
        beforeCreate() {
            console.log('---beforeCreate---');
        },
        created() {
            console.log('---created---');
        },
        beforeMount(){
            console.log('---beforeMount---');

        },
        mounted() {
            console.log('---mounted---');
            
        },
        beforeUpdate(){
            console.log('---beforeUpdate---');

        },
        updated(){
            console.log('---updated---');

        },
        beforeUnmount() {
            console.log('---beforeUnmount---');
            
        },
        unmounted(){
            console.log('---unmounted---');
        }
        // #endregion
    }
</script>

<style>
</style>
<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001</li><input type="text">
        <li>news002</li><input type="text">
        <li>news003</li><input type="text">
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1,
                timer:null
            }
        },

        // 当前组件处于活跃时候调用
        activated(){
            console.log('News组件激活了');
            this.timer =setInterval(()=>{
                
                this.opacity-=0.01
                if(this.opacity<=0) this.opacity=1
            },16)
        },
        // 当前组件处于不活跃时候调用
        deactivated(){
            console.log('News组件失活了');
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>
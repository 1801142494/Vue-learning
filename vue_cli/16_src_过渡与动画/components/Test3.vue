<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group 
    :appear="true"
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing" 
    leave-active-class="animate__bounceOutRight"
    >
        <div class="box" v-show="isShow" key="1"></div>
        <div class="box" v-show="!isShow" key="2"></div>
    </transition-group>
  </div>
</template>

<script>
    import 'animate.css';
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
.box{
    background-color: green;
}
</style>
<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="haha" :appear="true">
        <div class="box" v-show="isShow" key="1"></div>
        <div class="box" v-show="!isShow" key="2"></div>
    </transition-group>
  </div>
</template>

<script>
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
/* 通过过渡实现 */
.haha-enter-active,.haha-leave-active{
    transition: all 0.5s linear;
}
/* 进入的起点 ,离开的重点*/
.haha-enter,.haha-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点 ，离开的起点*/
.haha-enter-to,.haha-leave{
    transform: translateX(0);
}


.box{
    background-color: orange;
}
</style>
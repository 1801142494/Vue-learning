<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
        <div class="box" v-show="isShow"></div>
    </transition>
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
/* 通过动画实现 */
.hello-enter-active{
    animation: show 0.5s linear;
}
.hello-leave-active{
    animation: show 0.5s reverse;
}
@keyframes show{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
.box{
    background-color: skyblue;
}
</style>
<template>
	<h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',

        // 组件内路由守卫

        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
            console.log('About-beforeRouteEnter');
             if(to.meta.isAuth){//判断是否需要权限
                localStorage.setItem('school','atguigu')
                if(localStorage.getItem('school')==='atguigu'){
                    next()
                }else{
                    alert('学校不正确，无法查看')
                }
            }else{
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave(to,from,next){
            console.log('About-beforeRouteLeave');
            next()
        }
    }
</script>

<style>

</style>
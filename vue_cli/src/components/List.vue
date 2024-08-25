<template>
    <div class="row">
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>

        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <!-- 是否在加载 -->
        <h1 v-show="info.isLoad">正在加载中...</h1>
        <!-- 错误信息 -->
        <h1 v-show="info.errorMsg">{{info.errorMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoad:false,
                    errorMsg:'',
                    users:[],
                }
            }
        },
        mounted() {
            this.$bus.$on('updateList',(dataObj)=>{
                // 通过总线获取search组件返回的数据
                // console.log('我是list组件，收到了数据:',dataObj);
                this.info={...this.users,...dataObj}
                console.log('我是list组件，收到了数据:',this.users);

            })
        },
        beforeDestroy(){
            this.$bus.$off('updateList')
        }
        

    }
</script>

<style>

</style>
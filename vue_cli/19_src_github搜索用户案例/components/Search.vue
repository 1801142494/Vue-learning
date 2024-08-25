<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyword:''
            }
        },
        methods:{
            searchUsers(){
                // 初始化list组件
                this.$bus.$emit('updateList',{isFirst:false,isLoad:true,errorMsg:'',users:[],})

                axios.get(`https://api.github.com/search/users?q=${this.keyword}`,).then(
                    respose=>{
                        // 给list组件传递数据
                        this.$bus.$emit('updateList',{isLoad:false,errorMsg:'',users:respose.data.items,})
                    },
                    error=>{
                        console.log('请求错误'+error.message);
                        // 传递错误信息
                        this.$bus.$emit('updateList',{errorMsg:error.message,users:[],})
                    }
                )
            }
        },
    }
</script>

<style>

</style>
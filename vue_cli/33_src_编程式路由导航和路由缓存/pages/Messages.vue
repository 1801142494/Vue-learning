<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/messages/detail/${item.id}/${item.name}`">
                    {{item.name}}
                </router-link> -->

                <!-- to的对象写法， 注：这里必须用name确定路由-->
                <router-link :to="{
                    name:'xiaoxi',
                    params:{
                        id:item.id,
                        name:item.name
                    }
                }">
                    {{item.name}}
                </router-link>
                <button @click="pushShow(item)">push方式跳转</button>
                <button @click="replaceShow(item)">replace方式跳转</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Messages',
        data() {
            return {
                messageList:[
                    {id:'001',name:'消息001'},
                    {id:'002',name:'消息002'},
                    {id:'003',name:'消息003'},
                ]
            }
        },
        methods:{
            pushShow(item){
                // 通过router里的api方法实现跳转,push,replace
                this.$router.push({
                    name:'xiaoxi',
                    params:{
                        id:item.id,
                        name:item.name
                    }
                })
            },
            replaceShow(item){
                this.$router.replace({
                    name:'xiaoxi',
                    params:{
                        id:item.id,
                        name:item.name
                    }
                })
            }
        }
    }
</script>

<style>

</style>
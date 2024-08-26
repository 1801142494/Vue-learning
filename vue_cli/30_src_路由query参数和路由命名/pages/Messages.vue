<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/messages/detail?id=${item.id}&name=${item.name}`">
                    {{item.name}}
                </router-link> -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- <router-link :to="{
                    path:'/home/messages/detail',
                    query:{
                        id:item.id,
                        name:item.name
                    }
                }">
                    {{item.name}}
                </router-link> -->

                <!-- 通过给路由命名，简化path,使用to的对象写法指出路由名字-->
                <router-link :to="{
                    name:'xiaoxi',
                    query:{
                        id:item.id,
                        name:item.name
                    }
                }">
                    {{item.name}}
                </router-link>
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
    }
</script>

<style>

</style>
<template>
  <div>
    <h2>学生信息</h2>
    <h2>Count组件的总数是{{sum}}</h2>
    <h2>第一个人是{{firstPerson}}</h2>
    <input type="text" v-model="name">
    <button @click="addPerson">提交</button>
    <button @click="addWangPerson">添加一个姓王的</button>
    <button @click="addRandomPerson">随机添加一个人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // 不使用map...生成，实现vuex模块化
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPerson(){
                // 获取getter是要用         配置对象/getters里的方法
                return this.$store.getters['personAbout/firstPerson']
            }
        },
        methods:{
            addPerson(){
                const personObj={id:nanoid(),name:this.name}
                
                // commit提交这里要用 配置对象/mutations里的方法
                this.$store.commit('personAbout/ADD_PERSON',personObj)
            },
            addWangPerson(){
                const personObj={id:nanoid(),name:this.name}

                this.$store.dispatch('personAbout/addWangPerson',personObj)
                this.name=''
            },
            addRandomPerson(){
                this.$store.dispatch('personAbout/addRandomPerson')
            }
        }
    }
</script>

<style>

</style>
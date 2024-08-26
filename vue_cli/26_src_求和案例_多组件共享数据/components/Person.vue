<template>
  <div>
    <h2>学生信息</h2>
    <h2>Count组件的总数是{{sum}}</h2>
    <input type="text" v-model="name">
    <button @click="addPerson">提交</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        },
        methods:{
            addPerson(){
                const obj={id:nanoid(),name:this.name}
                
                this.$store.commit('ADD_PERSON',obj)
            }
        }
    }
</script>

<style>

</style>
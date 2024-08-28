<template>
  <h1>一个人的信息</h1>
  <h2>姓氏：<input type="text" v-model="person.firstName" /></h2>
  <h2>名字：<input type="text" v-model="person.lastName" /></h2>
  <h2>全名：{{ person.allName }}</h2>
  <h2>名字：<input type="text" v-model="person.allName" /></h2>
</template>

<script>
    import { computed, reactive } from 'vue'
    export default {
        name:'Demo',
        setup(){
            //数据
            let person=reactive({
                firstName:'张',
                lastName:'三'
            })
            // 计算属性-简写（只读）
            // person.allName = computed(()=>{
            //     return person.firstName + '-' +person.lastName
            // })

            // 计算属性-完整
            person.allName=computed({
                get(){
                    return person.firstName + '-' +person.lastName
                },
                set(value){
                    const arr=value.split('-')
                    person.firstName = arr[0]
                    person.lastName = arr[1]
                }
            })

            return{
                person
            }
        }
    }
</script>

<style>
</style>
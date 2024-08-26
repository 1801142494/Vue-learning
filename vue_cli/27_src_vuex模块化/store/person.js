// 人员管理相关配置

// 导入axios
import axios from 'axios'
// 导入nanoid
import {nanoid} from 'nanoid'

export default {
    namespaced:true,
    actions:{
        addWangPerson(context,val){
            //判断名字是不是姓王的
            if(val.name.indexOf('王')===0){
                context.commit('ADD_PERSON',val)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addRandomPerson(context,val){
            // 通过axios连接一个返回随机名字的api https://api.mir6.com/api/sjname
            axios.get('http://localhost:8080/miren/api/sjname').then(
                response=>{
                    // console.log(response.data);
                    const personObj={id:nanoid(),name:response.data}
                    context.commit('ADD_PERSON',personObj)
                },
                error=>{
                    console.log('网络请求失败',error.message);
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,val){
            state.personList.unshift(val)
        },
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPerson(state){
            return state.personList[0].name
        }
    },
}

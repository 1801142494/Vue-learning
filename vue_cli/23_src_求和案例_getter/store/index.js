// 该文件用于创建Vuex中最核心的store

// 导入Vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions——用于响应组件的动作
const actions={
    // actions主要写逻辑代码，如果不需要逻辑处理，可直接commit
    jia(context,val){
        //这里大写用以区分 
        context.commit('JIA',val)
    },
    jian(context,val){
        context.commit('JIAN',val)
    },
    jiaOdd(context,val){
        if(context.state.sum%2) context.commit('JIA',val)
    },
    jiaWait(context,val){
        setTimeout(()=>{
            context.commit('JIA',val)
        },1000)
    },
}
// 准备mutations——用于操作数据
const mutations={
    JIA(state,val){
        state.sum+=val
    },
    JIAN(state,val){
        state.sum-=val
    },
}
// 准备state——用于存储数据
const state={
    sum:0,
}

// 准备getter——用于state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum * 10
    }
}

// 暴露并创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
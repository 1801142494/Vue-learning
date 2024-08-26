// 求和相关配置
export default {
    // 必须使得namespaced为true，组件才能方便的获取配置的内容
    namespaced:true,
    actions:{
        jiaOdd(context,val){
            if(context.state.sum%2) context.commit('JIA',val)
        },
        jiaWait(context,val){
            setTimeout(()=>{
                context.commit('JIA',val)
            },1000)
        },
    },
    mutations:{
        JIA(state,val){
            state.sum+=val
        },
        JIAN(state,val){
            state.sum-=val
        },
    },
    state:{
        sum:0,
        school:'atguigu',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}
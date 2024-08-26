// 该文件用于创建Vuex中最核心的store

// 导入Vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 导入人员管理相关配置
import personOptions from './person.js'
// 求和相关配置
import countOptions from './count.js'

// 暴露并创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
})
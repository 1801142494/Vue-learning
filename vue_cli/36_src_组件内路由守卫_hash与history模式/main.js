// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 引入vue-resource插件
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 使用路由插件
Vue.use(VueRouter)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
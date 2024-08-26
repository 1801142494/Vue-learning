// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入vue-resource插件
import vueResource from 'vue-resource'
// 引入store
import store from './store'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    //使用store
    store
})
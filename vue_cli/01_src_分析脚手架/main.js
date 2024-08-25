// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})

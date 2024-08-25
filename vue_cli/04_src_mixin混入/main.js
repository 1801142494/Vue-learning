import Vue from 'vue'
import App from './App.vue'

// mixin全局设置
import mixin, { hunhe } from './mixin'
Vue.mixin(hunhe)

Vue.config.productionTip =false
new Vue({
    el: '#app',
    render: h => h(App)
})
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const vm = new Vue({
    el: '#app',
    render: h => h(App),

    // 全局事件总线-->
    // 目的：实现不同组件间的通信
    // 1.在main.js里的beforeCreate生命周期创建总线 Vue.prototype.$bus = this
    // 2.提供内容者 this.$bus.$emit(事件名，传递的参数)
    // 3.内容使用者 在mounted生命周期 使用this.$bus.$on(事件名，回调函数)绑定事件，
    //   记得在beforeDestroy生命周期 使用this.$bus.$off(事件名)解绑
    beforeCreate() {
        // 创建全局事件总线
        // Vue.prototype.$bus = vm;
        Vue.prototype.$bus = this;
    }
})

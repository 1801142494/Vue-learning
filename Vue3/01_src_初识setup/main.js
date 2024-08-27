//引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象——app(类似于之前的vm,但比vm更“轻”)
const app =createApp(App)
// 挂载
app.mount('#app')

// vue2的代码结构
// const vm=new Vue({
//     render:h=>h(App)
// })
// vm.$mount('#app')
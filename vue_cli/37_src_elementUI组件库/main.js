// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 完整的样式库
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI组件库的样式
// import 'element-ui/lib/theme-chalk/index.css';
// // 使用
// Vue.use(ElementUI);

// 引入局部样式库
import { Button, Row,DatePicker} from 'element-ui';
// 起别名
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})
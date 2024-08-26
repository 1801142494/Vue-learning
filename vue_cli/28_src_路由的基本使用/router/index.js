//该文件用于创建整个应用的路由器

// 导入vue-router插件
import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
    ]
})
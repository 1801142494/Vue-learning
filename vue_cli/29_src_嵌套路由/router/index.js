//该文件用于创建整个应用的路由器

// 导入vue-router插件
import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'

export default new VueRouter({
    routes:[
        // 一级路由要加斜杠
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            // 这是二级路由，不加斜杠
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages
                },
            ]
        },
      
        
    ]
})
//该文件用于创建整个应用的路由器

// 导入vue-router插件
import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

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
                    component:Messages,
                    // 这是三级路由
                    children:[
                        {
                            // 可以给路由命名
                            name:"xiaoxi",
                            // 路由的params参数，通过占位符确定后面的是参数
                            path:'detail/:id/:name',
                            component:Detail,

                            // props属性写法一，值为对象
                            // props:{id:'01',name:'abc'}

                            // props属性写法二，值为布尔，只能用于params参数
                            // props:true

                            // props属性写法三，值为函数，返回一个对象，对象中为键值对
                            props(route){
                                return {
                                    id:route.params.id,
                                    name:route.params.name
                                }
                            }
                        }
                    ]
                },
            ]
        },
      
        
    ]
})
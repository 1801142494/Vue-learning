//该文件用于创建整个应用的路由器

// 导入vue-router插件
import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

const router=new VueRouter({
    // 设置路由器模式 hash/history
    mode:"history",
    routes:[
        // 一级路由要加斜杠
        {
            name:'guanyu',
            path:'/about',
            component:About,
            // meta里可以放自定义的属性
            meta:{isAuth:true,title:"关于"}
        },
        {
            name:'jia',
            path:'/home',
            component:Home,
            meta:{title:"家"},
            // 这是二级路由，以后的都不加斜杠
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:"新闻"},

                    // 独享路由守卫（只有一个）
                    // beforeEnter:(to,from,next)=>{
                    //     console.log('独享路由守卫触发');
                    //     if(to.meta.isAuth){//判断是否需要权限
                    //         localStorage.setItem('school','atguigu')
                    //         if(localStorage.getItem('school')==='atguigu'){
                    //             next()
                    //         }else{
                    //             alert('学校不正确，无法查看')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'messages',
                    component:Messages,
                    meta:{isAuth:true,title:"消息"},
                    // 这是三级路由
                    children:[
                        {
                            // 可以给路由命名
                            name:"xiangqing",
                            // 路由的params参数，通过占位符确定后面的是参数
                            path:'detail/:id/:name',
                            component:Detail,

                            // props属性
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

// 全局前置路由守卫，————初始化的时候调用，每次路由切换前调用
// router.beforeEach((to,from,next)=>{
//     console.log('全局前置路由守卫触发');
    
//     if(to.meta.isAuth){//判断是否需要权限
//         localStorage.setItem('school','atguigu')
//         if(localStorage.getItem('school')==='atguigu'){
//             next()
//         }else{
//             alert('学校不正确，无法查看')
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫————初始化的时候调用，每次路由切换后调用
router.afterEach((to,from)=>{
    console.log('全局后置路由守卫触发');
    // 设置标题
    document.title = to.meta.title || ''
})

export default router
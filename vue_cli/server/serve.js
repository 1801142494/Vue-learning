// 创建一个后台服务
// 引入express
const express=require('express')

// 引入connect-history-api-fallback解决vue路由的history模式出现的问题
const history=require("connect-history-api-fallback")
// 创建应用
const app=express()

// 应用history
app.use(history())

// 设置静态资源
app.use(express.static(__dirname+'/static'))

app.get('/students',(req,res)=>{
    // res.setHeader('Access-Control-Allow-Origin','*');

    const students=[
        {
            id:'001',
            name:'tom',
            age:18
        },
        {
            id:'002',
            name:'jerry',
            age:18
        },
        {
            id:'001',
            name:'tony',
            age:18
        },
    ];
    console.log(req.get('Host')+req.url+'访问了');
    res.send(JSON.stringify(students))
})

app.get('/cars',(req,res)=>{

    const cars=[
        {
            id:'001',
            name:'奔驰',
            price:199
        },
        {
            id:'002',
            name:'马自达',
            price:109
        },
        {
            id:'001',
            name:'奥迪',
            price:120
        },
    ];
    console.log(req.get('Host')+req.url+'访问了');
    res.send(JSON.stringify(cars))
})
// 监听端口
app.listen(5000,(err)=>{
    if(!err)console.log('服务开启了，正在监控5000端口...');
})
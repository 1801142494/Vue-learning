// 开启一个发送信息的服务
const express=require('express')
const app=express()


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
app.listen(5000,()=>{
    console.log('服务开启了，正在监控5000端口...');
})
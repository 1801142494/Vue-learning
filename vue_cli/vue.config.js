const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave:false,  //语法检查，默认开启

  // 开启代理服务器
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  devServer:{
    proxy:{
      // 通过地址加前缀判断是否调用代理服务器
      '/atguigu':{
        target:'http://localhost:5000',
        pathRewrite:{'^/atguigu':''}, //清除地址前缀
        ws:true, //用于支持websocket
        changeOrigin:false //是否说出自己的地址，false为如是说出
      },
      '/demo':{
        target:'http://localhost:5000',
        pathRewrite:{'^/demo':''}, 
        ws:true, 
        changeOrigin:false 
      },
    }
  }
})

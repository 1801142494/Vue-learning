export default{
    install(Vue){
        //全局过滤器配
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        }),
        // 全局自定义指令
        Vue.directive('fbind',{
            // 当指令和元素第一次绑定的时候调用
            bind(element,binding){
                element.value=binding.value
            },
            // 指令所在元素插入页面的时候调用
            inserted(element,binding){
                element.focus()
            },
            // 模板重新解析的时候调用
            update(element,binding){
                element.value=binding.value
                element.focus()
            }
        }),
        // 全局混入
        Vue.mixin({
            methods: {
                showName(){
                    alert(this.name)
                }
            },
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        // 给vue原型增添一个方法
        Vue.prototype.demo=()=>{
            alert('你好')
        }
    }
    
}
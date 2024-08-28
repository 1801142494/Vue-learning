import { onMounted,onBeforeUnmount, reactive} from 'vue'

export default function (){
    // 实现鼠标 “打点” 的数据
    const point =reactive({
        x:'',
        y:''
    })
    // 实现鼠标 “打点” 的方法
    function savePoint(e){
        point.x=e.pageX
        point.y=e.pageY
        console.log(`x:${e.pageX},y:${e.pageY}`);
    }

    // 实现鼠标 “打点” 的生命钩子
    onMounted(()=>{
        window.addEventListener('click',savePoint)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',savePoint)
    })

    return point
}
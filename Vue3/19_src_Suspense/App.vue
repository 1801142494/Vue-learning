<template>
  <div class="app">
    <h2>App组件</h2>

    <!-- 通过Suspense配合异步引入，可以在网络不好的时候有替换页面-->
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中，请稍等...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  import {defineAsyncComponent} from 'vue'
  // import Child from './components/Child'//静态引入资源

  // 异步引入
  const Child =defineAsyncComponent(()=>import('./components/Child'))
  export default {
    name:'App',
    components:{Child}
  }
</script>

<style>
  .app{
    background-color: #ccc;
    padding: 10px;
  }
</style>
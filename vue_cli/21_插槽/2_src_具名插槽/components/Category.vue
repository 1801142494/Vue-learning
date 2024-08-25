<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等着组件的使用者来填充 -->
    <!-- 通过name属性指定接收的对象 -->
    <slot name="center">我是默认值，当使用者没用传递具体结构时，我会出现</slot>
    <slot name="footer">我是默认值，当使用者没用传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title']
    }
</script>

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>
<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 作用域插槽，让子组件的数据供父组件使用 -->
    <slot :games="games">我是默认值</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        data() {
        return {
          games:['穿越火线','英雄联盟','原神','星穹铁道'],
        }
		},
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
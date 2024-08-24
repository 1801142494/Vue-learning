<template>
    <div>
        <!-- 组件的结构 -->
        <h2>校名：{{name}}</h2>  
        <h2>地址：{{adress}}</h2>
    </div>
</template>
  
<script>
    // 组件的交互相关代码（数据，方法等）
    export default Vue.extend({
        name:'School',
        data() {
            return {
                name:'黑马培训',
                adress:'上海'
            }
        },
      
    })
</script>

<style>
    /* 组件的样式 */
</style>
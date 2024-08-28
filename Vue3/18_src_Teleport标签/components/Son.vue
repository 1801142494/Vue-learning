<template>
  <div class="son">
    <h3>Son组件</h3>
    <Dialog/>
  </div>
</template>

<script>
  import Dialog from './Dialog'
  export default {
  components: { Dialog },
    name:'Son',
  }
</script>

<style scope>
 .son{
    background-color: orange;
    padding: 10px;
 }
</style>
<template>
  <button @click="isShow=!isShow">显示和隐藏</button>
  <Demo v-if="isShow"/>
</template>

<script>
  import {ref} from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components: {Demo},
    setup(){
      const isShow=ref(true)

      return {isShow}
    }
  }
</script>

<style>

</style>

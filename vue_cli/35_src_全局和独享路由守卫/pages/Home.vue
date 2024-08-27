<template>
   <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item " href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/messages">Messages</router-link>
        </li>
      </ul>
      
      <!-- 保存路由缓存，可指定组件名
           注：在其父组件才对子组件有效 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>

</style>
<template>
	<div>
		<div class="row">
		<div class="col-xs-offset-2 col-xs-8">
			<Banner/>
		</div>
		</div>
		<div class="row">
		<div class="col-xs-2 col-xs-offset-2">
			<div class="list-group">
			<!-- 原始html实现跳转 -->
			<!-- <a class="list-group-item active" href="./about.html">About</a>
			<a class="list-group-item" href="./home.html">Home</a> -->

			<!-- vue-router实现跳转 -->
			<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
			<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
			</div>
		</div>
		<div class="col-xs-6">
			<div class="panel">
			<div class="panel-body">
				<!-- 要跳转内容的地方 -->
				<router-view></router-view>
			</div>
			</div>
		</div>
		</div>
  	</div>
</template>

<script>
	import Banner from './components/Banner'
	export default {
		name:'App',
		components:{Banner}
	}
</script>

<style>
	
</style>
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

			<!-- vue-router实现跳转 -->
			<!-- replace属性，使点击后当前站点记录替换旧记录 -->
			<router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
			<router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
			</div>
		</div>
		<div class="col-xs-6">
			<div class="panel">
			<div class="panel-body">
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
<template>
	<div class="container">
		<Category title="游戏" :listData="games">
			<!-- 作用域插槽:接收数据的父组件，必须用template标签包含
				  用scope属性可接收子组件传来的数据,值为对象-->
			<template scope="data">
				<ul>
					<li v-for="(item,index) in data.games" :key="index">{{item}}</li>
				</ul>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{
			Category,
		}
	}
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
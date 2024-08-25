<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
	</div>
</template>

<script>
	//引入 nanoid插件，生成随机id
	import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
		methods:{
			// 按下enter键后触发
			add(e){
				// 验证数据合法性
				if(!e.target.value.trim()) return alert('不能为空');
				// 实例化对象
				const todoObj={
					id:nanoid(),
					title:e.target.value,
					done:false
				};
				// 调用父组件的方法，给父组件传递数据
				// this.addTodo(todoObj);
				this.$emit('addTodo',todoObj);
				e.target.value='';
			},
		}
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
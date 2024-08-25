<template>
	<div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{finishTodo}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="delFinishTodo">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		
		props:['todos','deleteFinishTodo','doneAll'],
		computed:{
			// todo总数
			total(){
				return this.todos.length
			},
			// todo已勾选的数量
			finishTodo(){
				return this.todos.reduce((pre,current)=>{
					return pre+(current.done===true?1:0) 
				},0)
			},
			isAll:{
				set(val){
					this.doneAll(val);
				},
				get(){
					return this.total === this.finishTodo && this.total>0;
				}
			}
		},
		methods: {
			// 删除所有已勾选
			delFinishTodo(){
				this.deleteFinishTodo();
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
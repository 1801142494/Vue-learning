<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"/>
				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
				<MyFooter :todos="todos" :deleteFinishTodo="deleteFinishTodo" :doneAll="doneAll"/>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				// 本地存储
				todos:JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods: {
			// 添加数据
			addTodo(todoObj){
				this.todos.unshift(todoObj);
			},
			// 修改勾选
			checkTodo(id){
				this.todos.forEach(item=>{
					if(item.id===id){
						item.done=!item.done
					}
				})
			},
			// 删除数据
			deleteTodo(id){
				const newArr=this.todos.filter(item=>{
					return item.id !==id ;
				})
				this.todos =newArr;
			},
			// 删除已完成数据
			deleteFinishTodo(){
				const newArr=this.todos.filter(item=>{
					return item.done !==true ;
				})
				this.todos =newArr;
			},
			// 全选or全不选
			doneAll(flag){
				this.todos.forEach(item=>{
					item.done =flag;
				})
			}
		},
		watch:{
			todos:{
				// 开启深度监视
				deep:true,
				// 传回来最新的todos
				handler(val){
					localStorage.setItem('todos',JSON.stringify(val));
				}
			}
		}
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>

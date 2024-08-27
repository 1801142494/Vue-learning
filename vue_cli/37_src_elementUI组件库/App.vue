<template>
	<div>
		<button>按钮</button>
		<input type="text">
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<el-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
		<el-date-picker
			v-model="value1"
			type="date"
			placeholder="选择日期">
		</el-date-picker>
  	</div>
</template>

<script>
	export default {
		name:'App',
		data() {
			return {
				value1:''
			}
		},
	}
</script>

<style>
	body{
		padding: 5px;
	}
</style>
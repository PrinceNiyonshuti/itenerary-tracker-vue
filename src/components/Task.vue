<!-- @format -->

<template>
	<div :class="[task.reminder? 'reminder':'', 'task']" @dblclick="$emit('toggle-reminder',id)">
		<h3>
			<router-link :to="`/read/${task.id}`">
				{{ task.text }}
			</router-link>
			<i @click="$emit('delete-task',id)" class="fas fa-times"></i>
		</h3>
		<p>{{ task.day }}</p>
		<router-link :to="`/update/${task.id}`">Edit</router-link>
	</div>
</template>
<script>
	export default {
		name: "Task",
		props: {
			task: Object,
		},
        methods:{
        }
	};
</script>
<style scoped>
	.fas {
		color: red;
	}
	.task {
		background: #f4f4f4;
		margin: 5px;
		padding: 10px 20px;
		cursor: pointer;
	}
	.task.reminder {
		border-left: 5px solid green;
	}
	.task h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

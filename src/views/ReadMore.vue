<!-- @format -->

<template>
	<router-link to="/">Go Back</router-link>
	<div class="task">
		<h3>{{ task.text }}</h3>
		<p>{{ task.day }}</p>
	</div>
</template>
<script>
	export default {
		name: "ReadMore",
		props: {
			showAddTask: Boolean,
		},
		data() {
			return {
				task: [],
			};
		},
		methods: {
			async fetchTask(id) {
				const res = await fetch(`/api/tasks/${id}`);
				const data = await res.json();
				return data;
			},
		},
		async created() {
			this.task = await this.fetchTask(this.$route.params.id);
		},
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

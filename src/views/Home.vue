<!-- @format -->

<template>
	<div v-show="showAddTask">
		<AddTask @add-task="addTask" />
	</div>

	<Tasks
		:tasks="tasks.task"
		@delete-task="deleteTask"
		@toggle-reminder="toggleReminder"
	/>
</template>
<script>
	import Tasks from "../components/Tasks.vue";
	import AddTask from "../components/AddTask.vue";
	export default {
		name: "Home",
		props: {
			showAddTask: Boolean,
		},
		components: {
			Tasks,
			AddTask,
		},
		data() {
			return {
				tasks: {
					task: [],
				},
			};
		},
		methods: {
			async addTask(task) {
				const res = await fetch("http://localhost:8000/api/tasks/store", {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(task),
				});

				const data = await res.json();
				this.tasks.task = [...this.tasks.task, data];
			},
			async deleteTask(id) {
				if (confirm("Are you sure ?")) {
					const res = await fetch(`api/tasks/${id}`, {
						method: "DELETE",
					});

					res.status === 200
						? (this.tasks.task = this.tasks.task.filter((task) => task.id !== id))
						: alert("Error while deleting tasks");
				}
			},
			async toggleReminder(id) {
				const taskToToggle = await this.fetchTask(id);
				const updTask = {
					task: {
						...taskToToggle,
						reminder: !taskToToggle.reminder,
					},
				};

				const res = await fetch(`api/tasks/${id}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(updTask),
				});

				const data = await res.json();

				this.tasks.task = this.tasks.task.map((task) =>
					task.id === id ? { ...task, reminder: data.reminder } : task
				);
			},

			async fetchTasks() {
				const res = await fetch("api/tasks");
				const data = await res.json();
				return data;
			},
			async fetchTask(id) {
				const res = await fetch(`api/tasks/read/${id}`);
				const data = await res.json();
				return data;
			},
		},
		async created() {
			this.tasks.task = await this.fetchTasks();
		},
	};
</script>

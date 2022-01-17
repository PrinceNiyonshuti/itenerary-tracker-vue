<!-- @format -->

<template>
	<router-link to="/">Go Back</router-link>
	<form @submit="onSubmit" class="add-form">
		<div class="form-control">
			<label>Task</label>
			<input
				type="hidden"
				v-model="taskId"
				name="taskId"
				placeholder="Add Task"
			/>
			<input type="text" v-model="text" name="text" placeholder="Add Task" />
		</div>
		<div class="form-control">
			<label>Day & Time</label>
			<input
				type="text"
				v-model="day"
				name="day"
				placeholder="Add Day & Time"
			/>
		</div>
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" v-model="reminder" name="reminder" />
		</div>

		<input type="submit" value="Update Task" class="btn btn-block" />
	</form>
</template>
<script>
	export default {
		name: "Update",
		props: {
			showAddTask: Boolean,
		},
		data() {
			return {
				task: [],
				taskId: "",
				text: "",
				day: "",
				reminder: "",
			};
		},
		methods: {
			async fetchTask(id) {
				const res = await fetch(`http://127.0.0.1:8000/api/tasks/${id}`);
				const data = await res.json();
				return data;
			},
			async onSubmit(e) {
				e.preventDefault();
				if (!this.text) {
					alert("Please add a task");
				}

				const id = this.taskId;
				const UpdatedTask = {
					task: {
						text: this.text,
						day: this.day,
						reminder: this.reminder,
					},
				};

				await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(UpdatedTask),
				}).then(() => this.$router.push(this.$route.query.redirect || "/"));
			},
		},
		async created() {
			this.task = await this.fetchTask(this.$route.params.id);
			this.taskId = this.task.id;
			this.text = this.task.text;
			this.day = this.task.day;
			this.reminder = this.task.reminder;
		},
	};
</script>
<style scoped>
	.add-form {
		margin-bottom: 40px;
	}
	.form-control {
		margin: 20px 0;
	}
	.form-control label {
		display: block;
	}
	.form-control input {
		width: 100%;
		height: 40px;
		margin: 5px;
		padding: 3px 7px;
		font-size: 17px;
	}
	.form-control-check {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.form-control-check label {
		flex: 1;
	}
	.form-control-check input {
		flex: 2;
		height: 20px;
	}
</style>

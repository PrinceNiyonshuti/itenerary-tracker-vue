<!-- @format -->

<template>
	<router-link to="/">Go Back</router-link>
	<form @submit="onSubmit" class="add-form">
		<Input label="" type="hidden" v-model="taskId" name="text" placeholder="Add Task Name " />
		<Input label="Task Name" type="text" v-model="text" name="text" placeholder="Add Task Name " />
		<Input label="Day & Time" type="text" v-model="day" name="text" placeholder="Add Day & Time" />
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" v-model="reminder" name="reminder" />
		</div>
		<Button type="submit" text="Update Task" class="btn btn-block" />
	</form>
</template>
<script>
	import Button from "../components/Button.vue";
	import Input from "../components/Input.vue";
	export default {
		name: "Update",
		components: {
			Button,
			Input,
		},
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


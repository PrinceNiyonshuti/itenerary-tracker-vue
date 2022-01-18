<!-- @format -->

<template>
	<form @submit="onSubmit" class="add-form">
		<Input label="Task Name" type="text" v-model="task.text" name="text" placeholder="Add Task Name " />
		<Input label="Day & Time" type="text" v-model="task.day" name="text" placeholder="Add Day & Time" />
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" v-model="task.reminder" name="reminder" />
		</div>
		<Button type="submit" text="Save Task" class="btn btn-block" />
	</form>
</template>
<script>
	import Button from "./Button.vue";
	import Input from "./Input.vue";
	export default {
		name: "AddTask",
		components: {
			Button,
			Input,
		},
		data() {
			return {
				task: {
					text: "",
					day: "",
					reminder: false,
				},
			};
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();

				if (!this.task.text) {
					alert("Please add a task");
				}

				const newTask = {
					task: {
						text: this.task.text,
						day: this.task.day,
						reminder: false,
					},
				};

				this.$emit("add-task", newTask);

				// clear the form
				(this.task.text = ""),
					(this.task.day = ""),
					(this.task.reminder = false);
			},
		},
	};
</script>
<style scoped>
	.add-form {
		margin-bottom: 40px;
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

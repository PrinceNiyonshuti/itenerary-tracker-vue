<!-- @format -->

<template>
	<form @submit="onSubmit" class="add-form">
		<div class="form-control">
			<label>Task</label>
			<input
				type="text"
				v-model="task.text"
				name="text"
				placeholder="Add Task"
			/>
		</div>
		<div class="form-control">
			<label>Day & Time</label>
			<input
				type="text"
				v-model="task.day"
				name="day"
				placeholder="Add Day & Time"
			/>
		</div>
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" v-model="task.reminder" name="reminder" />
		</div>

		<input type="submit" value="Save Task" class="btn btn-block" />
	</form>
</template>
<script>
	export default {
		name: "AddTask",
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

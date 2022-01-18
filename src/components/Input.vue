<!-- @format -->

<template>
	<div class="form-control">
		<label>{{ label }}</label>
		<input
			:type="type"
			:name="name"
			v-model="inputValue"
			:placeholder="placeholder"
		/>
	</div>
</template>
<script>
	export default {
		name: "Input",
		props: {
			label: String,
			type: String,
			name: String,
			placeholder: String,
			modelValue: [Number, String],
		},
		computed: {
			inputValue: {
				get() {
					return this.modelValue;
				},
				set(value) {
					this.$emit("update:modelValue", value);
				},
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

<!-- @format -->

<template>
	<button @click="addTask()" :style="{ background: color }" class="btn">
		{{ text }}
	</button>
</template>
<script>
	export default {
		name: "Button",
		props: {
			text: String,
			color: String,
		},
		methods: {
			addTask() {
				this.$emit("toggle-add-task");
			},
		},
	};
</script>

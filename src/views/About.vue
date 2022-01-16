<!-- @format -->

<template>
	<h3>About The App</h3>
	<p>Version 1.0.0</p>
	<router-link to="/">Home</router-link>
</template>
<script>
	export default {
		name: "About",
		props: {
			showAddTask: Boolean,
		},
	};
</script>

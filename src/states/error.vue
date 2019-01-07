<script>
export default {
	name: 'ErrorState',
	data: () => ({
		error: null
	})
}
</script>

<template>
	<div class="error-state">
		<h1>Error</h1>
		<p>{{ error.message }}</p>
	</div>
</template>

<style scoped>
.error-state {
	position: fixed;
	left: 0; right: 0;
	top: 0; bottom: 0;
	z-index: 5;

	background: red;
	color: white;
}
</style>

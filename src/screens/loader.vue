<template>
	<div class="debug loader">
		Loading
	</div>
</template>

<script>
export default {
	name: 'loader'
}
</script>

<style scoped>
.loader {
	background: red;
	display: none;
}
[loading=true] {
	display: block;
}
</style>

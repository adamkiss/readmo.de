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
	opacity: 0;
	transition: opacity .2s linear;
}
[loading=true] {
	opacity: 1;
}
</style>

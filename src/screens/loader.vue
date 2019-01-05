<template>
	<div class="debug loader" v-on:click="setNotLoading">
		Loading
	</div>
</template>

<script>
export default {
	name: 'loader',
	data: () => ({ loading: false }),
	methods: {
		setNotLoading: function() {
			this.$parent.loading = false
		}
	}
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

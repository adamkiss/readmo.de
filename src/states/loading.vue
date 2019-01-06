<script>
export default {
	name: 'LoadingState',
	data: () => ({ loading: false }),
	methods: {
		setNotLoading: function() {
			window.alert('wtf')
			this.$parent.loading = false
		}
	}
}
</script>

<template>
	<div class="debug loader" v-on:click="setNotLoading">
		Loading
	</div>
</template>

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

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
	<div class="loading-state" v-on:click="setNotLoading">
		<span class="loader">Loading</span>
	</div>
</template>

<style scoped>
.loading-state {
	position: fixed;
	left: 0; right: 0;
	top: 0; bottom: 0;
	z-index: 10;
	background: rgba(255, 0, 0, .2);

	display: flex;
	align-items: center;
	justify-content: center;
}
.loader {
	/* @todo */
}
[loading=true] {
	opacity: 1;
}
</style>

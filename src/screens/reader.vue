<script>
export default {
	name: 'Reader',
	data: () => ({ loading: false }),
}
</script>

<template>
	<div class="debug reader" v-bind:class="{'is-loading': loading}">
		<span v-if="this.$parent.page" v-html="this.$parent.page.body"></span>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reader {
	background: black;
	color: white;

	transition: filter .1s linear .5s;
}

[loading=true] {
	filter: blur(5px)
}
</style>

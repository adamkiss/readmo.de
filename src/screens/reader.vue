<template>
	<div class="debug reader" v-bind:class="{'is-loading': loading}">
		Read
	</div>
</template>

<script>
export default {
	name: 'Reader',
	props: {}
}
</script>

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

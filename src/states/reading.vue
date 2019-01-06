<script>
export default {
	name: 'ReadingState',
	data: () => ({ loading: false }),
}
</script>

<template>
	<div class="reading-state" v-bind:class="{'is-loading': loading}">
		<button @click="this.$parent.navigateToWelcome()">Back to Welcome page</button>
		<h1 v-if="this.$parent.page">{{ this.$parent.page.title }}</h1>
		<span v-if="this.$parent.page" v-html="this.$parent.page.body"></span>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reading-state {
	padding: 20px;
	text-align: justify;

	transition: filter .1s linear .5s;
}
[loading=true] {
	filter: blur(5px)
}
</style>

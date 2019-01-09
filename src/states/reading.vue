<template>
	<div class="reading-state" v-bind:class="{'is-loading': is('loading')}" v-if="currentPage">
		<button @click="navigateToWelcome">Back to Welcome page</button>
		<h1>{{ currentPage.title }}</h1>
		<span v-html="currentPage.body"></span>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'ReadingState',
	computed: mapGetters(['is', 'currentPage']),
	methods: mapActions(['navigateToWelcome'])
}
</script>

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

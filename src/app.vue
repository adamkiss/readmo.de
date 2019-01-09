<template>
	<div id="app">
		<welcome-state v-show="is('welcome')" />
		<loading-state v-show="is('loading')" />
		<error-state v-show="is('error')" />
		<reading-state v-show="is('reading')" />
	</div>
</template>

<script>
// @todo lazy loading components: "async components"
import {mapGetters, mapActions} from 'vuex'
import LoadingState from './states/loading.vue'
import ErrorState from './states/error.vue'
import WelcomeState from './states/welcome.vue'
import ReadingState from './states/reading.vue'

export default {
	name: 'app',
	computed: mapGetters(['is']),
	methods: mapActions(['setState', 'setError', 'setStateOnLoad']),
	mounted: async function() {
		await this.setStateOnLoad()
	},
	components: {
		LoadingState, ErrorState, WelcomeState, ReadingState
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.is-loading {
	filter: blur(5px);
}
</style>

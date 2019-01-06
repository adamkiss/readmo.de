<script>
// @todo lazy loading components: "async components"
import WelcomeState from './states/welcome.vue'
import LoadingState from './states/loading.vue'
import ReadingState from './states/reading.vue'
import axios from 'axios'

export default {
	name: 'app',
	data: () => ({
		state: 'loading',
		page: null
	}),
	methods: {
		setState(newState) {
			this.state = newState
		},
		getUrl: function() {
			return `${window.location.pathname}${window.location.search}`.substring(1)
		},
		loadUrl: async function(url) {
			try {
				const page = await axios.post(`http://lapi.readmo.de.localhost/`, {url})
				return page.data.page
			} catch (err) {
				console.error(err) // eslint-disable-line
				return null
			}
		},
		navigate: async function(url) {
			this.setState('loading')

			this.page = await this.loadUrl(url)

			this.setState('reading')
		}
	},
	mounted: async function() {
		const url = this.getUrl()
		if (url)
			this.page = await this.loadUrl(url)

		this.setState(url ? 'reading' : 'welcome')
	},
	components: {
		LoadingState, WelcomeState, ReadingState
	}
}
</script>

<template>
	<div id="app">
		<welcome-state v-show="state === 'welcome'"
			:loading="state === 'loading'"
		/>
		<loading-state
			:loading="state === 'loading'"
		/>
		<reading-state v-show="state === 'reading'"
			:loading="state === 'loading'"
			:page="page"
		/>
	</div>
</template>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.debug {
	width: 100px;
	height: 100px;
}

.is-loading {
	filter: blur(5px);
}
</style>

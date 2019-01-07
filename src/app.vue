<template>
	<div id="app">
		<welcome-state v-show="state === 'welcome'"
			:loading="state === 'loading'"
		/>
		<loading-state v-show="state === 'loading'"
			:loading="state === 'loading'"
		/>
		<error-state v-show="state === 'error'"
			:error="error"
		/>
		<reading-state v-show="state === 'reading'"
			:loading="state === 'loading'"
			:page="page"
		/>
	</div>
</template>

<script>
// @todo lazy loading components: "async components"
import LoadingState from './states/loading.vue'
import ErrorState from './states/error.vue'
import WelcomeState from './states/welcome.vue'
import ReadingState from './states/reading.vue'
import axios from 'axios'

export default {
	name: 'app',
	data: () => ({
		state: 'loading',
		url: null,
		page: null,
		error: null
	}),
	methods: {
		setState(newState) {
			this.state = newState
		},
		setError(err) {
			this.setState('error')
			this.error = err

			return null
		},
		getUrl: function() {
			const {pathname, search} = window.location
			return `${pathname}${search}`.substring(1)
		},
		loadUrl: async function(url) {
			try {
				const page = await axios.post(`http://lapi.readmo.de.localhost/`, {url})
				return page.data.page
			} catch (err) {
				return this.setError(err)
			}
		},
		navigateToWelcome: function() {
			this.setState('loading')

			this.url = null
			this.page = null

			this.setState('welcome')
		},
		navigate: async function(url) {
			this.setState('loading')

			try {
				const page = await this.loadUrl(url)
				this.page = page
				this.url = url
			} catch (err) {
				return this.setError(err)
			}

			this.setState('reading')
		}
	},
	mounted: async function() {
		this.url = this.getUrl()

		if (this.url)
			this.page = await this.loadUrl(this.url)

		this.setState(this.url ? 'reading' : 'welcome')
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

<script>
// @todo lazy loading components: "async components"
import Welcome from './screens/welcome.vue'
import Loader from './screens/loader.vue'
import Reader from './screens/reader.vue'
import axios from 'axios'

export default {
	name: 'app',
	data: () => ({
		loading: true,
		page: null
	}),
	methods: {
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
			this.loading = true

			this.page = await this.loadUrl(url)

			this.loading = false
		}
	},
	mounted: async function() {
		const url = this.getUrl()
		if (url)
			this.page = await this.loadUrl(url)

		this.loading = false
	},
	components: {
		Welcome, Loader, Reader
	}
}
</script>

<template>
	<div id="app">
		<Welcome v-bind:loading="loading" v-show="page === null"/>
		<Loader  v-bind:loading="loading" />
		<Reader  v-bind:loading="loading" v-show="page !== null" v-bind="page"/>
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

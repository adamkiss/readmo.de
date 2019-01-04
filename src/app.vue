<template>
	<div id="app">
		<Welcome v-bind:loading="loading" v-show="page === null"/>
		<Loader  v-bind:loading="loading" />
		<Reader  v-bind:loading="loading" v-show="page !== null"/>
	</div>
</template>

<script>
import Welcome from './screens/welcome.vue'
import Loader from './screens/loader.vue'
import Reader from './screens/reader.vue'

export default {
	name: 'app',
	data: () => ({
		loading: true,
		page: null
	}),
	components: {
		Welcome, Loader, Reader
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

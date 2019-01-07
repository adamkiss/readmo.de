<template>
	<div class='welcome-state' v-bind:class="{'is-loading': loading}">
		<input v-model='url' type='url' />
		<button @click="navigate">Readmo.de this</button>
		<hr>
		<button>Paste from clipboard and go (@todo)</button>
	</div>
</template>

<script>
import isUrl from 'is-url'

export default {
	name: 'WelcomeState',
	data: () => ({
		url: null,
		loading: false
	}),
	methods: {
		shakeInput() {

		},
		navigate() {
			if (this.url && isUrl(this.url))
				this.$parent.navigate(this.url)
			else
				this.shakeInput()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-state {
	min-height: 100vh;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
[loading=true] {
	filter: blur(5px)
}
</style>

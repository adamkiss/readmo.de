<template>
	<div class='debug welcome' v-bind:class="{'is-loading': loading}">
		Welcome
	</div>
</template>

<script>
export default {
	name: 'Welcome',
	data: () => ({ loading: false })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
	background-color: #42b983;
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

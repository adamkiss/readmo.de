<template>
	<div class="error-state" v-if="hasError">
		<h1>Error</h1>
		<pre>{{ getError('message') }}</pre>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'ErrorState',
	computed: mapGetters(['hasError', 'getError'])
}
</script>

<style scoped>
.error-state {
	position: fixed;
	left: 0; right: 0;
	top: 0; bottom: 0;
	z-index: 5;

	background: red;
	color: white;
}
</style>

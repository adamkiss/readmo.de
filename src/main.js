/* global window */

import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

window.app = new Vue({
	render: h => h(App)
}).$mount('#app')


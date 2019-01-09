/* global window */

// test url: https://medium.com/s/2069/what-happens-when-the-rich-live-decades-longer-than-the-rest-of-us-2dfec4a35b21

import Vue from 'vue'
import App from './app.vue'
import store from './store'

Vue.config.productionTip = false

window.app = new Vue({
	store,
	render: h => h(App)
}).$mount('#app')

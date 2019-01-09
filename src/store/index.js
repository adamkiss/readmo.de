import Vue from 'vue'
import Vuex from 'vuex'
import settings from './settings'
import navigation from './navigation'

Vue.use(Vuex)

const state = {
	state: 'loading',
	error: null
}

const getters = {
	is: state => (checkFor = null) => checkFor ? state.state === checkFor : state.state,
	hasError: state => Boolean(state.error),
	getError: state => (prop = null) => prop ? state.error[prop] : JSON.stringify(state.error, null, 4)
}

const mutations = {
	setState(state, payload) {
		state.state = payload.state
	},
	setError(state, payload) {
		state.error = payload.error
	}
}

const actions = {
	setState: ({commit}, payload) => commit('setState', payload),
	setError: ({commit}, payload) => {
		commit('setState', {state: 'error'})
		commit('setError', payload)
	}
}

const store = new Vuex.Store({
	state, getters, mutations, actions,
	modules: {settings, navigation}
})

export default store

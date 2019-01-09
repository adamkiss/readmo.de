/* global window */

import axios from 'axios'

const state = {
	url: null,
	pages: {}
}

const getters = {
	url: state => state.url,
	page: state => url => url in state.pages ? state.pages[url] : null,
	currentPage: (state, getters) => state.url ? getters.page(state.url) : null
}

const mutations = {
	setUrl(state, {url}) {
		state.url = url
	},
	addPage(state, {url, page}) {
		state.pages[url] = page
	}
}

const actions = {
	async loadPage({commit, dispatch}, {url}) {
		try {
			const {data: {page}} = await axios.post('http://lapi.readmo.de.localhost/', {url})
			commit('addPage', {url, page})
			commit('setUrl', {url})
		} catch (error) {
			dispatch('setError', {error})
		}
	},
	async navigate({commit, dispatch}, {url}) {
		commit('setState', {state: 'loading'})

		await dispatch('loadPage', {url})

		commit('setState', {state: 'reading'})
	},
	async navigateToWelcome({commit}) {
		commit('setState', {state: 'loading'})
		commit('setUrl', {url: null})
		commit('setState', {state: 'welcome'})
	},
	async setStateOnLoad({dispatch}) {
		const {pathname, search} = window.location
		const reqUrl = `${pathname}${search}`.substring(1)

		if (reqUrl) {
			await dispatch('loadPage', {url: reqUrl})
			dispatch('setState', {state: 'reading'})
		} else {
			dispatch('setState', {state: 'welcome'})
		}
	}
}

export default {state, getters, mutations, actions}

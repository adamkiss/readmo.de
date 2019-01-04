/* global window */

import {h} from 'hyperapp'
import './app.css'
// import EmptyScreen from './screens/empty'
// import LoadingScreen from './screens/loading'
import ReadScreen from './screens/read'

// import got from 'got'
import {parse} from 'query-string'

const getUrlFromQueryString = () => {
	let parsed = {}
	if ('search' in window.location && window.location.search)
		parsed = parse(window.location.search)

	return 'url' in parsed ? parsed.url : null
}

export const state = {
	loading: false,
	url: null,
	page: null
}

export const actions = {
	load: () => () => ({url: getUrlFromQueryString()}),
	loadUrl: url => async () => {
		// const response = got(url)
		return {url, page: 'wat'}
	}
}

export const view = (state, actions) => {
	return (
		<div className='App' oncreate={el => actions.load(el)}>
			<ReadScreen/>
			<pre style='border: 1px solid #ccc; padding: 1em'>{JSON.stringify(state)}</pre>
		</div>
	)
}

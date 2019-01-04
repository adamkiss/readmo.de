/* global window */

import {parse} from 'query-string'

import {h} from 'hyperapp'
import EmptyScreen from './screens/empty'

const App = state => {
	if (window.location.search)
		state.url = parse(window.location.search)

	return (
		<div className='App'>
			<EmptyScreen/>
		</div>
	)
}

export default App

/* global document, it */

import {h, app} from 'hyperapp'
import App from './app'

it('renders without crashing', () => {
	app({}, {}, () => <App/>, document.body)
})

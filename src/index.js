/* global document */

import {h, app} from 'hyperapp'
import './index.css'
import App from './app'

const state = {}

const actions = {}

app(state, actions, () => <App/>, document.body)

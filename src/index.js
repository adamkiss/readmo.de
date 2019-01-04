/* global document, window */

import {h, app} from 'hyperapp'

import './index.css'
import {state, actions, view} from './app'

window.app = app(state, actions, view, document.body)

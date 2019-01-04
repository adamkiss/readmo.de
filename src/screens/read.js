import {h} from 'hyperapp'

const dangerouslySetInnerHTML = (el, str) => {
	el ? el.innerHTML = str : null // eslint-disable-line no-unused-expressions
}

const ReadScreen = state => (
	<div className='reader' innerHTML={'parsed' in state && state.parsed.body}/>
)

export default ReadScreen

import {h} from 'hyperapp'
import logo from '../logo.svg'
import s from './loading.module.css'

const LoadingScreen = () => (
	<div className={s.root}>
		<img src={logo} className={s.logo} alt='logo'/>
	</div>
)

export default LoadingScreen

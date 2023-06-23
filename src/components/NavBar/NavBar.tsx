import style from './NavBar.module.scss'
import logo from '../../assets/logo.png'
export const NavBar = () => {
	return (
		<>
			<div className={style.navbar_container}>
				<img src={logo} alt="logo"/>
				<span>tekerau</span>
					<ul>
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
					</ul>
			</div>
		</>
	)
}
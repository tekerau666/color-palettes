import style from './NavBar.module.scss'
import logo from '../../assets/logo.png'
export const NavBar = ({ image, info, links } : {image: any, info: string, links: string}) => {
	return (
		<>
			<div className={style.navbar_container}>
				<img src={image} alt="logo"/>
				<span>{info}</span>
					<ul>
						<li>{links}</li>
						<li>{links}</li>
						<li>Link 3</li>
					</ul>
			</div>
		</>
	)
}
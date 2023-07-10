import style from './ColorTable.module.scss'
import '../../index.scss'
export const ColorTabel = () => {
	return (
		<div>
			<div className={style.colorFamilyPrimary}>
				<div className={style.primary}>
					<span>Primary</span>
				</div>
				<div className={style.onPrimary}>
					<span>On Primary</span>
				</div>
				<div className={style.primaryContainer}>
					<span>Primary Container</span>
				</div>
				<div className={style.onPrimaryContainer}>
					<span>On Primary Container</span>
				</div>
			</div>
<div className={style.colorFamilyPrimary}>
			<div className={style.secondary}>
				<span>Secondary</span>
			</div>
			<div className={style.onSecondary}>
				<span>On Secondary</span>
			</div>
			<div className={style.secondaryContainer}>
				<span>Secondary Container</span>
			</div>
			<div className={style.onSecondaryContainer}>
				<span>On Secondary Container</span>
			</div>
</div>
		</div>
	)
}
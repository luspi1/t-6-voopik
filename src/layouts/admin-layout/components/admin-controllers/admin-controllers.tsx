import { type FC } from 'react'

import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'

type AdminControllersProps = {
	outLink: string
}

export const AdminControllers: FC<AdminControllersProps> = ({ outLink }) => {
	return (
		<section className={styles.adminControllers}>
			<AdminButton as='button' $padding='9.5px 22px' type='submit'>
				Применить и продолжить
			</AdminButton>
			<AdminButton as='link' to={outLink} $padding='9.5px 18px' $outlined>
				Сохранить и выйти
			</AdminButton>
		</section>
	)
}

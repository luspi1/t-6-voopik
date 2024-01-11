import { type FC } from 'react'

import cnBind from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { VkSocialSvg } from 'src/UI/icons/vkSocialSVG'
import { OkSocialSvg } from 'src/UI/icons/okSocialSVG'
import { TelegramSocialSvg } from 'src/UI/icons/telegramSocialSVG'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
export const Footer: FC = () => {
	const { pathname } = useLocation()

	const cx = cnBind.bind(styles)

	return (
		<footer className={cx(styles.footer, { _transparent: pathname === AppRoute.Home })}>
			<Container className={styles.footerContent}>
				<span className={styles.footerCopyright}>© ВООПИК, 2023</span>
				<p className={styles.footerDesc}>
					Cвидетельство о регистрации средства массовой информации Эл № ФС77 - 37229 от 14 августа
					2009 г. Выдано Федеральной службой по надзору в сфере связи, информационных технологий и
					массовых коммуникаций (Роскомнадзор).
				</p>
				<ul className={styles.footerSocials}>
					<li>
						<a href='#'>
							<VkSocialSvg />
						</a>
					</li>
					<li>
						<a href='#'>
							<OkSocialSvg />
						</a>
					</li>
					<li>
						<a href='#'>
							<TelegramSocialSvg />
						</a>
					</li>
				</ul>
			</Container>
		</footer>
	)
}

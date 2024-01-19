import { type FC, useEffect, useState } from 'react'
import { type NavigationItem } from 'src/types/navigation'

import { Link, NavLink, useLocation } from 'react-router-dom'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

type BreadCrumbsProps = {
	crumbsLinks: NavigationItem[]
	crumbsPathname: string
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ crumbsLinks, crumbsPathname }) => {
	const [pathNames, setPathNames] = useState<string[]>([''])

	const { state } = useLocation()

	const defineLinkTitle = (link: string) => {
		const searchEl = crumbsLinks.find((el) => el.link === link)
		if (searchEl?.title) {
			return searchEl?.title
		}
	}

	useEffect(() => {
		setPathNames([...crumbsPathname.split('/').slice(1)])
	}, [crumbsPathname])

	return (
		<ul className={styles.breadCrumbsList}>
			<li>
				<Link to={AppRoute.Home}> Главная </Link> /
			</li>

			{pathNames?.map((pathEl, idx) => {
				if (pathNames.length === idx + 1) {
					return (
						<li key={pathEl}>
							<span>{state?.additionalCrumbs ?? defineLinkTitle(pathEl)}</span>
						</li>
					)
				}
				return (
					<li key={pathEl}>
						<NavLink to={`/${pathNames.slice(0, idx + 1).join('/')}`}>
							{defineLinkTitle(pathEl)}
						</NavLink>{' '}
						/
					</li>
				)
			})}
		</ul>
	)
}

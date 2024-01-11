import React, { type FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'
export const PageContent: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div {...props} className={cn(styles.pageContent, props.className)}>
			{props.children}
		</div>
	)
}

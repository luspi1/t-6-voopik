import { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import { AdminSectionContent } from 'src/layouts/admin-layout/components/admin-section/components/admin-section-content/admin-section-content'
import { MainSwitcher } from 'src/UI/MainSwitcher/MainSwitcher'

import styles from './index.module.scss'
import { useFormContext } from 'react-hook-form'

type AdminSectionProps = {
	children: ReactNode
	sectionName?: string
	className?: string
	titleText?: string
	contentPadding?: string
	contentMaxWidth?: string
}

export const AdminSection: FC<AdminSectionProps> = ({
	children,
	sectionName,
	className,
	titleText,
	contentPadding,
	contentMaxWidth,
}) => {
	const { watch } = useFormContext()
	return (
		<section className={cn(styles.adminSection, className)}>
			<div className={styles.adminSectionHead}>
				<h2>{titleText}</h2>
				{sectionName && <MainSwitcher name={sectionName} label='Включить блок ссылок' />}
			</div>
			{(!sectionName || watch(sectionName)) && (
				<AdminSectionContent $maxWidth={contentMaxWidth} $padding={contentPadding}>
					{children}
				</AdminSectionContent>
			)}
		</section>
	)
}

import { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import { AdminSectionContent } from 'src/layouts/admin-layout/components/admin-section/components/admin-section-content/admin-section-content'
import { AdminSwitcher } from 'src/layouts/admin-layout/components/admin-switcher/admin-switcher'
import { useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type AdminSectionProps = {
	children: ReactNode
	sectionName?: string
	className?: string
	titleText?: string
	switcherText?: string
	contentPadding?: string
	contentMaxWidth?: string
	contentBorder?: string
	contentBg?: string
}

export const AdminSection: FC<AdminSectionProps> = ({
	children,
	sectionName,
	className,
	titleText,
	switcherText,
	contentPadding,
	contentMaxWidth,
	contentBorder,
	contentBg,
}) => {
	const { watch } = useFormContext()

	return (
		<section className={cn(styles.adminSection, className)}>
			<div className={styles.adminSectionHead}>
				<h2>{titleText}</h2>
				{sectionName && <AdminSwitcher name={sectionName} label={switcherText} />}
			</div>
			{(!sectionName || watch(sectionName)) && (
				<AdminSectionContent
					$maxWidth={contentMaxWidth}
					$padding={contentPadding}
					$background={contentBg}
					$border={contentBorder}
				>
					{children}
				</AdminSectionContent>
			)}
		</section>
	)
}

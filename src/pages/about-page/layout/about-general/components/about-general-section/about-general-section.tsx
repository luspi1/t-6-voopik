import { type FC, type PropsWithChildren } from 'react'

type AboutGeneralSectionProps = PropsWithChildren<{
	title: string
	className?: string
}>

export const AboutGeneralSection: FC<AboutGeneralSectionProps> = ({
	title,
	children,
	className,
	...props
}) => {
	return (
		<section {...props}>
			<h4>{title}</h4>
			{children}
		</section>
	)
}

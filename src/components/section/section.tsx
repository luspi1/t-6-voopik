import { type FC, type PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
	title: string
	className?: string
}>

export const Section: FC<SectionProps> = ({ title, children, className, ...props }) => {
	return (
		<section {...props}>
			<h4>{title}</h4>
			{children}
		</section>
	)
}

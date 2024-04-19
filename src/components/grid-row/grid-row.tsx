import styled from 'styled-components'
import { type FC, type ReactNode } from 'react'

type StyledGridRowProps = {
	$margin?: string
	$gap?: string
	$alignItems?: string
	$template?: string
	$maxWidth?: string
	children: ReactNode
}

const StyledGridRow = styled.div<StyledGridRowProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	display: grid;
	gap: ${({ $gap }) => $gap ?? '0 10px'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? '100%'};
	align-items: ${({ $alignItems }) => $alignItems ?? 'start'};
	grid-template: ${({ $template }) => $template ?? 'auto / 1fr 1fr'};
`

export const GridRow: FC<StyledGridRowProps> = ({ children, ...props }) => {
	return <StyledGridRow {...props}>{children}</StyledGridRow>
}

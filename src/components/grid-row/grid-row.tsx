import styled from 'styled-components'
import { type FC, type ReactNode } from 'react'

type StyledGridRowProps = {
	$margin?: string
	$gap?: string
	$template?: string
	children: ReactNode
}

const StyledGridRow = styled.div<StyledGridRowProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	display: grid;
	gap: ${({ $gap }) => $gap ?? '0 10px'};
	grid-template: ${({ $template }) => $template ?? 'auto / 1fr 1fr'};
`

export const GridRow: FC<StyledGridRowProps> = ({ children, ...props }) => {
	return <StyledGridRow {...props}>{children}</StyledGridRow>
}

import styled from 'styled-components'
import React, { type FC, type ReactNode } from 'react'

type StyledFlexRowProps = {
	$margin?: string
	$gap?: string
	$alignItems?: string
	$maxWidth?: string
	$wrap?: string
	$justifyContent?: string
	children: ReactNode
} & React.CSSProperties

const StyledFlexRow = styled.div<StyledFlexRowProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	display: flex;
	gap: ${({ $gap }) => $gap ?? '20px'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? '100%'};
	flex-wrap: ${({ $wrap }) => $wrap ?? 'wrap'};
	align-items: ${({ $alignItems }) => $alignItems ?? 'start'};
	justify-content: ${({ $justifyContent }) => $justifyContent ?? 'start'};
`

export const FlexRow: FC<StyledFlexRowProps> = ({ children, ...props }) => {
	return <StyledFlexRow {...props}>{children}</StyledFlexRow>
}

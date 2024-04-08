import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'

import styled from 'styled-components'

type PromptInputProps = PropsWithChildren<{
	children: ReactNode
	promptText?: string
	$margin?: string
}>

const StyledPromptInput = styled.div<PromptInputProps>`
	margin: ${({ $margin }) => $margin ?? '0 0 17px 0'};
	display: grid;
	column-gap: 20px;
	grid-template-columns: minmax(405px, 1.1fr) 0.9fr;
`
const StyledPromptText = styled.p`
	font-size: 14px;
	font-weight: 300;
	line-height: 1.3;
	color: #2d3231;
	padding: 25px 0 0 0;
`

export const PromptInput: FC<PromptInputProps> = ({ children, promptText, ...props }) => {
	return (
		<StyledPromptInput {...props}>
			{children}
			<StyledPromptText>{promptText}</StyledPromptText>
		</StyledPromptInput>
	)
}

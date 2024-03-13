import React from 'react'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AdminButtonProps = {
	outlined?: boolean
	danger?: boolean
	as: 'link' | 'button'
}

const AdminButtonStyled = styled.button<AdminButtonProps>`
	padding: 9.5px 56px;
	display: inline-block;
	line-height: 1;
	border-radius: 3px;
	font-size: 14px;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	background-color: #113770;
	color: #ffffff;
	border: 1px solid transparent;

	${({ outlined }) =>
		outlined &&
		`
    background-color: transparent;
    color: #113770;
    border: 1px solid #113770;
  `}

	${({ danger }) =>
		danger &&
		`
    background-color: transparent;
    color: #FF0000;
    border: 1px solid #FF0000;
  `}
`

export const AdminButton: FC<AdminButtonProps & (ButtonProps | LinkProps)> = ({
	children,
	as,
	...props
}) => {
	if (as === 'link') {
		return (
			<AdminButtonStyled as={Link} {...(props as LinkProps)}>
				{children}
			</AdminButtonStyled>
		)
	}

	return <AdminButtonStyled {...(props as ButtonProps)}>{children}</AdminButtonStyled>
}

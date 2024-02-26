import { type FC, type ReactNode } from 'react'

import styled from 'styled-components'

type AdminContentProps = {
	children: ReactNode
	$padding?: string
}

const StyledAdminContent = styled.div<AdminContentProps>`
	background-color: #fff;
	flex-grow: 1;
	border-radius: 5px;
	padding: ${({ $padding }) => $padding ?? '20px 20px 200px 20px'};
`
export const AdminContent: FC<AdminContentProps> = ({ children }) => {
	return <StyledAdminContent>{children}</StyledAdminContent>
}

import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
	children: string
}

const StyledButton = styled.button<ButtonProps>`
	display: inline-block;
`;

const Button: FC<ButtonProps> = ({ children }) => {

	return (
		<StyledButton>{children}</StyledButton>
	)
}

export default Button;
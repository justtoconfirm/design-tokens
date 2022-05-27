import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
	disabled?: boolean,
	onClick?: MouseEventHandler<HTMLButtonElement>
	children: string
};

const StyledButton = styled.button<ButtonProps>`
	display: inline-block;
`;

const Button: FC<ButtonProps> = ({ disabled, children, onClick, ...props }) => {

	return (
		<StyledButton onClick={onClick} disabled={disabled} {...props}>{children}</StyledButton>
	)
};

export default Button;
import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
	disabled?: boolean,
	onClick?: MouseEventHandler<HTMLButtonElement>,
	theme?: "primary" | "secondary",
	size?: "small" | "medium" | "large",
	children: string
};

const StyledButton = styled.button<ButtonProps>`
	display: inline-block;

	background-color: ${props => props.theme == "primary"? "red" : (props.theme === "secondary"? "blue" : "transparent")};
	padding: ${props => props.size === "small"? "3rem 2rem" : (props.size === "medium"? "6rem 4rem" : "12rem 8rem")};
`;

const Button: FC<ButtonProps> = ({ disabled, children, onClick, theme, size, ...props }) => {

	return (
		<StyledButton onClick={onClick} disabled={disabled} theme={theme} size={size} {...props}>{children}</StyledButton>
	)
};

export default Button;
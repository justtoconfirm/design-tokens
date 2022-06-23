import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
	disabled?: boolean,
	onClick?: () => void,
	theme?: "ms" | "morethan",
	size?: "small" | "medium" | "large",
	children: string
};

const StyledButton = styled.button<ButtonProps>`
	display: inline-block;
	margin: 1rem;
	border: 0;
	color: #fff;
	cursor: pointer;
	background-color: ${props => props.theme == "ms"? "rgb(0, 86, 64)" : (props.theme === "morethan"? "rgb(82, 174, 50)" : "transparent")};
	padding: ${props => props.size === "small"? "1rem 2rem" : (props.size === "medium"? "2rem 3rem" : "3rem 4rem")};

	&:hover {
		opacity: 0.8;
	}
`;

const Button: FC<ButtonProps> = ({ disabled, children, onClick, theme, size, ...props }) => {

	return (
		<StyledButton type="button" onClick={onClick} disabled={disabled} theme={theme} size={size} {...props}>{children}</StyledButton>
	)
};

export default Button;
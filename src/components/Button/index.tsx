import React, { FC } from 'react';

export interface ButtonProps {
	text?: string
}

const Button: FC<ButtonProps> = () => {

	return (
		<button>{text}</button>
	)
}

export default Button;
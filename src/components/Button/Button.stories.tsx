import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => 
	<Button theme="primary">Button</Button>;

export const Secondary: ComponentStory<typeof Button> = () => 
	<Button theme="secondary">Button</Button>;
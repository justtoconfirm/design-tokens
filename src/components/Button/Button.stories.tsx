import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Import the Button component from the component library
import Button from './index';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

// Create a template to render the component
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	theme: 'ms',
	disabled: false,
	children: 'Continue',
}

export const Secondary = Template.bind({});
Secondary.args = {
	theme: 'morethan',
	disabled: false,
	children: 'Continue',
}

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: 'Continue',
}

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	disabled: false,
	children: 'Continue',
}

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	disabled: false,
	children: 'Continue',
}

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	disabled: false,
	children: 'Continue',
}
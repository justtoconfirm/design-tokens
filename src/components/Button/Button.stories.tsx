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
	theme: 'primary',
	disabled: false,
	children: 'Submit',
}

export const Secondary = Template.bind({});
Secondary.args = {
	theme: 'secondary',
	disabled: false,
	children: 'Submit',
}

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: 'Submit',
}

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	disabled: false,
	children: 'Submit',
}

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	disabled: false,
	children: 'Submit',
}

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	disabled: false,
	children: 'Submit',
}
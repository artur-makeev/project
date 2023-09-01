import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		placeholder: 'Type text',
		value: 'adsaasd',
	},
};

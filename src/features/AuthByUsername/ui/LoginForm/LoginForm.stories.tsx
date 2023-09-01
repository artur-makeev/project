import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
	title: 'feature/LoginForm',
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: { username: '123', password: '321' },
		}),
	],
};

export const WithError: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: { username: '123', password: '321', error: 'error' },
		}),
	],
};

export const Loading: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: { isLoading: true },
		}),
	],
};

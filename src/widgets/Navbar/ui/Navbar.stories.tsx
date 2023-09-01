import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({})],
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({})],
};

export const AuthNavbar: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			user: { authData: { id: '13', username: '123' } },
		}),
	],
};

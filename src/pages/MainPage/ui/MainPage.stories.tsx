import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [ReduxDecorator],
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Dark)],
};

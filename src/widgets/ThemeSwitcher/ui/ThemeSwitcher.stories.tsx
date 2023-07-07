import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'widget/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Light)],
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Dark)],
};

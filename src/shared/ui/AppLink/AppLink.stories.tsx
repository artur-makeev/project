import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink ',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const SecondaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

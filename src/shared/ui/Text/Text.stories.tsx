import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		title: 'Title Title',
		text: 'Description Description Description Description ',
	},
};

export const Error: Story = {
	args: {
		title: 'Title Title',
		text: 'Description Description Description Description ',
		theme: TextTheme.ERROR,
	},
};

export const OnlyTitle: Story = {
	args: {
		title: 'Title Title',
	},
};

export const OnlyText: Story = {
	args: {
		text: 'Description Description Description Description ',
	},
};

export const PrimaryDark: Story = {
	args: {
		title: 'Title Title',
		text: 'Description Description Description Description ',
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Title Title',
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const OnlyTextDark: Story = {
	args: {
		text: 'Description Description Description Description ',
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

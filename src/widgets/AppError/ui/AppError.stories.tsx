import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppError } from './AppError';

const meta: Meta<typeof AppError> = {
	title: 'widget/AppError',
	component: AppError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof AppError>;

export default meta;
type Story = StoryObj<typeof AppError>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Dark)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
// import 'app/styles/index.scss';

const meta: Meta<typeof Sidebar> = {
	title: 'widget/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.Dark)],
};

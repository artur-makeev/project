import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Aasd ada sadsad adsa ds adsd asd asd sad htrhgrth rt thr',
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children: 'Aasd ada sadsad adsa ds adsd asd asd sad htrhgrth rt thr',
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

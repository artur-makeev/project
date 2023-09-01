import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineSizeXL: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Text',
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const ClearDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR,
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.Dark)],
};

export const BackgroundTheme: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};

export const SquareSizeXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

export const Disabled: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.OUTLINE,
		disabled: true,
	},
};

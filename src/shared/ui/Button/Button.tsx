import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[styles.square]: square,
	};

	return (
		<button
			className={classNames(styles.Button, mods, [
				className,
				styles[theme],
				styles[size],
			])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

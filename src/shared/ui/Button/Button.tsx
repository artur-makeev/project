import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button
			className={classNames(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

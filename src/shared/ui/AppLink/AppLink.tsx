import type { ReactNode } from 'react';
import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
	theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(styles.AppLink, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};

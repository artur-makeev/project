import { Theme, useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(styles.ThemeSwitcher, {}, [
				className,
				styles.button,
			])}
			onClick={toggleTheme}
		>
			{theme === Theme.Dark ? (
				<DarkIcon className={styles.icon} />
			) : (
				<LightIcon fill='white' className={styles.icon} />
			)}
		</Button>
	);
};

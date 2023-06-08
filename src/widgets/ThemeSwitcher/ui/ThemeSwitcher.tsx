import { Theme, useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(styles.ThemeSwitcher, {}, [
				className,
				styles.button,
			])}
			onClick={toggleTheme}
		>
			{theme === Theme.Light ? (
				<LightIcon fill='white' className={styles.icon} />
			) : (
				<DarkIcon className={styles.icon} />
			)}
		</Button>
	);
};

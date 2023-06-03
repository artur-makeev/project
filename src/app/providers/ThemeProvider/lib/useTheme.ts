import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/config/theme/ThemeContext';

interface useThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): useThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	};

	return {theme, toggleTheme}
}
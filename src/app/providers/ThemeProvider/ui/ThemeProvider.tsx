import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: Theme;
}

export const ThemeProvider = ({
	children,
	initialTheme,
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

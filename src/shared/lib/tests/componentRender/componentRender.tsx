import type { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import type { StateScema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface ComponentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateScema>;
}

export function componentRender(
	component: ReactNode,
	options: ComponentRenderOptions = {}
) {
	const { route = '/', initialState } = options;

	return render(
		<StoreProvider initialState={initialState as StateScema}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
}

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import type { StateScema } from '../config/StateScema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateScema;
}

export const StoreProvider = ({
	children,
	initialState,
}: StoreProviderProps) => {
	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};

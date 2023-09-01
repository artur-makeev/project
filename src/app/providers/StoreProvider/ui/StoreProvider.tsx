import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import type { StateScema } from '../config/StateScema';
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateScema;
	asyncReducers?: DeepPartial<ReducersMapObject<StateScema>>;
}

export const StoreProvider = ({
	children,
	initialState,
	asyncReducers,
}: StoreProviderProps) => {
	const store = createReduxStore(
		initialState,
		asyncReducers as ReducersMapObject<StateScema>
	);

	return <Provider store={store}>{children}</Provider>;
};

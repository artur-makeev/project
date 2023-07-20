import { configureStore } from '@reduxjs/toolkit';
import type { StateScema } from './StateScema';
import { counterReducer } from 'entity/Counter';

export function createReduxStore(initialState?: StateScema) {
	return configureStore<StateScema>({
		reducer: {
			counter: counterReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

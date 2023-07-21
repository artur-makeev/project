import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateScema } from './StateScema';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';

export function createReduxStore(initialState?: StateScema) {
	const rootReducers: ReducersMapObject<StateScema> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore<StateScema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

import type { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import type { ReducerManager, StateScema, StateScemaKey } from './StateScema';

export function createReducerManager(
	initialReducers: ReducersMapObject<StateScema>
): ReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: StateScemaKey[] = [];

	return {
		getReducerMap: () => reducers,
		reduce: (state: StateScema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (const key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},
		add: (key: StateScemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;

			combinedReducer = combineReducers(reducers);
		},
		remove: (key: StateScemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];

			keysToRemove.push(key);

			combinedReducer = combineReducers(reducers);
		},
	};
}

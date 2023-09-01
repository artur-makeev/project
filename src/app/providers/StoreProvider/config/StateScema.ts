import type {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import type { CounterScema } from 'entity/Counter';
import type { UserScema } from 'entity/User';
import type { LoginScema } from 'features/AuthByUsername';

export interface StateScema {
	counter: CounterScema;
	user: UserScema;

	// Async reducers
	loginForm?: LoginScema;
}

export type StateScemaKey = keyof StateScema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateScema>;
	reduce: (state: StateScema, action: AnyAction) => CombinedState<StateScema>;
	add: (key: StateScemaKey, reducer: Reducer) => void;
	remove: (key: StateScemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScema> {
	reducerManager: ReducerManager;
}

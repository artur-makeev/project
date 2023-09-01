import type { Reducer } from '@reduxjs/toolkit';
import type { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import type { StateScemaKey } from 'app/providers/StoreProvider/config/StateScema';
import { useEffect, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
	[name in StateScemaKey]?: Reducer;
};

export type ReducerListEntry = [StateScemaKey, Reducer];

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	children: ReactNode;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
	children,
	reducers,
	removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name, reducer]: ReducerListEntry) => {
						store.reducerManager.remove(name);
						dispatch({ type: `@DESTROY ${name} reducer` });
					}
				);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
};

/* eslint-disable react/display-name */
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import type { StateScema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateScema>,
		asyncReducers: DeepPartial<ReducersMapObject<StateScema>>
	) =>
	(Story: StoryFn) =>
		(
			<StoreProvider
				initialState={state as StateScema}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<Story />
			</StoreProvider>
		);

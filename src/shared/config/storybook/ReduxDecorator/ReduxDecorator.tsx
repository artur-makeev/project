import type { DeepPartial } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import type { StateScema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

export const ReduxDecorator = (Story: StoryFn) => {
	const state: DeepPartial<StateScema> = {
		counter: { value: 10 },
	};

	return (
		<StoreProvider initialState={state as StateScema}>
			<Story />
		</StoreProvider>
	);
};

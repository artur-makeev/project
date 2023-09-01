/* eslint-disable react/display-name */
import type { DeepPartial } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import type { StateScema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator =
	(state: DeepPartial<StateScema>) => (Story: StoryFn) =>
		(
			<StoreProvider initialState={state as StateScema}>
				<Story />
			</StoreProvider>
		);

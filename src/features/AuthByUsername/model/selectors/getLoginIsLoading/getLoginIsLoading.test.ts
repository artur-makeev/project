import { DeepPartial } from '@reduxjs/toolkit';
import { StateScema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoadingr.test', () => {
	test('should return true', () => {
		const state: DeepPartial<StateScema> = {
			loginForm: {
				isLoading: true,
			}
		};

		expect(getLoginIsLoading(state as StateScema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateScema> = {};
		expect(getLoginIsLoading(state as StateScema)).toEqual(false);
	})
});

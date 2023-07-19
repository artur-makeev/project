import type { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import type { StateScema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateScema> = {
			counter: { value: 10 },
		};
		expect(getCounter(state as StateScema)).toEqual({ value: 10 });
	});
});

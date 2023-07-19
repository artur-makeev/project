import type { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import type { StateScema } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
	test('first test', () => {
		const state: DeepPartial<StateScema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateScema)).toEqual(10);
	});
});

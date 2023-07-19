import { counterReducer, counterActions } from './counterSlice';
import type { CounterScema } from '../types/counterScema';

describe('counterSlice', () => {
	test('increment', () => {
		const state: CounterScema = {
			value: 10,
		};

		expect(counterReducer(state, counterActions.increment)).toEqual({
			value: 11,
		});
	});

	test('decrement', () => {
		const state: CounterScema = {
			value: 10,
		};

		expect(counterReducer(state, counterActions.decrement)).toEqual({
			value: 9,
		});
	});

	test('should work with empty state', () => {
		expect(counterReducer(undefined, counterActions.decrement)).toEqual({
			value: -1,
		});
	});
});

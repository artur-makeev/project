import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import type { CounterScema } from '../../types/counterScema';

export const getCounterValue = createSelector(
	getCounter,
	(counter: CounterScema) => counter.value
);

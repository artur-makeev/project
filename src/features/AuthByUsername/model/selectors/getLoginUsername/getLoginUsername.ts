import type { StateScema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateScema) =>
	state?.loginForm?.username || '';

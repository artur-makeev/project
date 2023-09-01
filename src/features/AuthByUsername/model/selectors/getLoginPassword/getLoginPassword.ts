import type { StateScema } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateScema) =>
	state?.loginForm?.password || '';

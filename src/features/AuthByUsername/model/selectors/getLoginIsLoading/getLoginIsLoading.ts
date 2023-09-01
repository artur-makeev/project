import type { StateScema } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateScema) =>
	state?.loginForm?.isLoading || false;

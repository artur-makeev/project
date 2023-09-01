import type { StateScema } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateScema) => state?.loginForm?.error;

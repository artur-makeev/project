import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UserScema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserScema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (user) {
				state.authData = JSON.parse(user);
			}
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

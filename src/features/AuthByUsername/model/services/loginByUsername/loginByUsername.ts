import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, type User } from 'entity/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

interface ThunkApiConfig {
	rejectValue: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	ThunkApiConfig
>('login/loginByUsername', async (authData, thunkAPI) => {
	try {
		const response = await axios.post<User>(
			'http://localhost:8000/login',
			authData
		);

		if (!response.data) {
			throw new Error();
		}

		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
		thunkAPI.dispatch(userActions.setAuthData(response.data));

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});

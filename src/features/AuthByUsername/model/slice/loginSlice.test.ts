import { DeepPartial } from '@reduxjs/toolkit';
import { LoginScema } from '../types/loginScema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginScema> = {username: '123'};
		expect(loginReducer(state as LoginScema, loginActions.setUsername('123123')))
			.toEqual({username: '123123'});
	});

	test('test set password', () => {
		const state: DeepPartial<LoginScema> = {password: '123'};
		expect(loginReducer(state as LoginScema, loginActions.setPassword('123123')))
			.toEqual({password: '123123'});
	});
})
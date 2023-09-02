import { DeepPartial } from '@reduxjs/toolkit';
import { StateScema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';


describe('getLoginPassword.test', () => {
	test('should return password', () => {
		const state: DeepPartial<StateScema> = {
			loginForm: {
				password: 'asd',
			}
		};

		expect(getLoginPassword(state as StateScema)).toEqual('asd');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateScema> = {};
		expect(getLoginPassword(state as StateScema)).toEqual('');
	})
});

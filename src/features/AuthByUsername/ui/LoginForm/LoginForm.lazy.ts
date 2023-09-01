import type { FC } from 'react';
import { lazy } from 'react';
import type { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
	() => import('./LoginForm')
);

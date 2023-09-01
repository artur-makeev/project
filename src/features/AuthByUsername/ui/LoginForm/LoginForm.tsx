/* eslint-disable react/display-name */
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, error, isLoading } = useSelector(getLoginState);

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Text title={t('Форма авторизации')} />
			{error && (
				<Text
					text={t('Вы ввели неверный логин или пароль')}
					theme={TextTheme.ERROR}
				/>
			)}
			<Input
				autofocus
				type='text'
				className={styles.input}
				placeholder={t('Введите username')}
				onChange={onChangeUserName}
				value={username}
			/>
			<Input
				type='text'
				className={styles.input}
				placeholder={t('Введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={styles.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});

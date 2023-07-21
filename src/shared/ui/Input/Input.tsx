/* eslint-disable react/display-name */
import type { ChangeEvent } from 'react';
import {
	memo,
	type InputHTMLAttributes,
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>();
	const [isFocused, setIsFocused] = useState(false);
	const [carpetPosition, setCarpetPosition] = useState(0);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCarpetPosition(e.target.value.length);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
		const target = e.target as HTMLInputElement;
		setCarpetPosition(target.selectionStart || 0);
	};

	return (
		<div className={classNames(styles.InputWrapper, {}, [className])}>
			{placeholder && (
				<div className={styles.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={styles.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={styles.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocused && (
					<span
						className={styles.caret}
						style={{ left: `${carpetPosition * 9}px` }}
					/>
				)}
			</div>
		</div>
	);
});
